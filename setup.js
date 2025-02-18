const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const newProjectName = process.argv[2]
if (!newProjectName) {
  console.error('Please provide a project name')
  process.exit(1)
}

// Files to update project name
const filesToUpdate = [
  'package.json',
  'README.md',
  '.env.example',
  'src/lib/constants.ts'
]

try {
  // Update files
  filesToUpdate.forEach(file => {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8')
      content = content.replace(/next-template/g, newProjectName)
      fs.writeFileSync(file, content)
    }
  })

  // Clean git history
  fs.rmSync('./.git', { recursive: true, force: true })
  execSync('git init')

  // Install dependencies
  execSync('npm install')

  console.log(`✅ Project setup complete for ${newProjectName}!`)
} catch (error) {
  console.error('Error during setup:', error)
  process.exit(1)
}