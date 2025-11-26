import { NextRequest, NextResponse } from 'next/server';
import { getSigner, getIndexer } from '@/lib/0g-storage';
import { ZgFile } from '@0glabs/0g-ts-sdk';
import formidable from 'formidable';  // npm install formidable for multipart parsing
import fs from 'fs';

export async function POST(request: NextRequest) {
  try {
    const form = formidable({});
    const [fields, files] = await form.parse(request as any);  // Parse multipart

    const file = files.file?.[0];  // Assume 'file' field in form
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });

    // Read file path (temporary)
    const filePath = file.filepath;
    const zgFile = await ZgFile.fromFilePath(filePath);

    // Generate Merkle tree for verification
    const [tree, treeErr] = await zgFile.merkleTree();
    if (treeErr) throw new Error(`Merkle tree error: ${treeErr}`);

    const rootHash = tree?.rootHash();
    console.log('File Root Hash:', rootHash);

    // Upload to 0G Storage
    const signer = await getSigner();
    const indexer = getIndexer();
    const [tx, uploadErr] = await indexer.upload(zgFile, RPC_URL, signer);
    if (uploadErr) throw new Error(`Upload error: ${uploadErr}`);

    // Cleanup
    await zgFile.close();
    fs.unlinkSync(filePath);  // Remove temp file

    return NextResponse.json({ 
      success: true, 
      rootHash, 
      transactionHash: tx,
      message: 'Record uploaded to 0G Storage' 
    });
  } catch (error) {
    console.error('Upload failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}