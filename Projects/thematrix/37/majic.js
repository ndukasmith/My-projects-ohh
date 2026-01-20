function isMagicSquare(grid) {
    if (grid.length !== 9) {
    return false;
    }
    
    const sum = 15;
    const rows = [
    grid[0] + grid[1] + grid[2],
    grid[3] + grid[4] + grid[5],
    grid[6] + grid[7] + grid[8]
    ];
    const cols = [
    grid[0] + grid[3] + grid[6],
    grid[1] + grid[4] + grid[7],
    grid[2] + grid[5] + grid[8]
    ];
    const diags = [
    grid[0] + grid[4] + grid[8],
    grid[2] + grid[4] + grid[6]
    ];
    
    return [...rows, ...cols, ...diags].every(s => s === sum);
    }