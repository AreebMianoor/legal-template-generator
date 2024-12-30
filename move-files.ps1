# Create necessary directories
New-Item -ItemType Directory -Force -Path src/pages
New-Item -ItemType Directory -Force -Path src/components
New-Item -ItemType Directory -Force -Path src/layouts
New-Item -ItemType Directory -Force -Path src/content
New-Item -ItemType Directory -Force -Path public
New-Item -ItemType Directory -Force -Path .vscode
New-Item -ItemType Directory -Force -Path .astro

# Copy core project files
Copy-Item -Path "project/src/*" -Destination "src/" -Recurse -Force
Copy-Item -Path "project/public/*" -Destination "public/" -Recurse -Force
Copy-Item -Path "project/tailwind.config.mjs" -Destination "." -Force
Copy-Item -Path "project/tsconfig.json" -Destination "." -Force
Copy-Item -Path "project/.vscode/*" -Destination ".vscode/" -Recurse -Force
Copy-Item -Path "project/.astro/*" -Destination ".astro/" -Recurse -Force
Copy-Item -Path "project/package-lock.json" -Destination "." -Force

# Copy configuration files
Copy-Item -Path "project/.env" -Destination "." -Force

# Merge .gitignore contents
$projectGitignore = Get-Content "project/.gitignore"
$rootGitignore = Get-Content ".gitignore"
$mergedGitignore = $rootGitignore + "`n# Project specific ignores`n" + $projectGitignore
$mergedGitignore | Set-Content ".gitignore"

# Remove project directory after successful copy
Remove-Item -Path "project" -Recurse -Force 