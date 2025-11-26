import { NextRequest, NextResponse } from 'next/server';
import { getIndexer } from '@/lib/0g-storage';
import path from 'path';
import fs from 'fs';

export async function GET(request: NextRequest, { params }: { params: { rootHash: string } }) {
  try {
    const rootHash = params.rootHash;
    const indexer = getIndexer();

    // Temp output path
    const outputPath = path.join('/tmp', `${rootHash}.pdf`);  // Adjust extension as needed

    // Download with proof verification
    const err = await indexer.download(rootHash, outputPath, true);
    if (err) throw new Error(`Download error: ${err}`);

    // Stream response
    const fileBuffer = fs.readFileSync(outputPath);
    fs.unlinkSync(outputPath);  // Cleanup

    return new NextResponse(fileBuffer, {
      headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': `attachment; filename="${rootHash}.pdf"` },
    });
  } catch (error) {
    console.error('Download failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}