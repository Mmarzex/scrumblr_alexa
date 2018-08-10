$source = Get-Location
$dest = "$source\release.zip"

Write-Host "Compressing Function for Deployment..."
if(Test-Path $dest) {
    Remove-Item -Path $dest -Force -Recurse -Confirm:$false
}

function ZipFiles( $zipfilename, $sourcedir )
{
   Add-Type -Assembly System.IO.Compression.FileSystem
   $compressionLevel = [System.IO.Compression.CompressionLevel]::Optimal
   [System.IO.Compression.ZipFile]::CreateFromDirectory($sourcedir,
        $zipfilename, $compressionLevel, $false)
}

$parent = (Get-Item $source).Parent.FullName
$zipdest = "$parent\release.zip"
ZipFiles $zipdest $source
Move-Item -Path $zipdest -Destination $dest

if(Test-Path $dest) {
    Write-Host "release.zip created successfully"
} else {
    Write-Host "There was a problem"
}
