# Demo Players Folder

## How to Add Demo Players

1. **Upload and analyze** a player's medical documents in the application
2. **Click "Save as Demo"** button in the player dashboard
3. A JSON file will be **downloaded** to your computer (e.g., `john_doe_demo.json`)
4. **Place the JSON file** in this `demos/` folder
5. **Update the manifest** (see instructions below)
6. **Refresh the page** to see the new demo card

## Two Ways to Manage Demo Files

### Option 1: Using manifest.json (Recommended)

Edit the `manifest.json` file in this folder and add your demo filenames:

```json
{
  "files": [
    "tyler_baron_demo.json",
    "john_doe_demo.json",
    "jane_smith_demo.json"
  ]
}
```

This is the cleanest approach and gives you full control over which demos are loaded.

### Option 2: Automatic Detection

The system will automatically try to load files matching these patterns:
- `player1_demo.json`, `player2_demo.json`, ... `player20_demo.json`
- `demo1.json`, `demo2.json`, `demo3.json`

Just name your files following these patterns and they'll be loaded automatically without updating the manifest!

## Demo File Structure

Each demo JSON file should contain:
- `name`: Player name
- `draftYear`: Draft year
- `handedness`: L/R/Unknown
- `facts`: Complete medical facts object
- `score`: Calculated medical score
- `scoreBreakdown`: Score breakdown details
- `documents`: List of analyzed documents
- `savedAt`: Timestamp when demo was created

## Current Demo Files

- `tyler_baron_demo.json` - Tyler Baron demo player

## Tips

- Use descriptive filenames like `playername_demo.json`
- Keep the manifest.json updated for best performance
- The system will skip any files that fail to load
- Duplicate players (same name) will be filtered out automatically
