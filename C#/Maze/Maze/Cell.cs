using System;
using System.Collections.Generic;
using Maze;
using Microsoft.Xna.Framework;

namespace Maze
{
    public class Cell
    {
        public int x, y;
        public bool visited = false;
        public bool[] walls = {true, true, true, true};
        Cell[,] maze;

        public Cell(Cell[,] maze, int x, int y) {
            this.maze = maze;
            this.x = x;
            this.y = y;
        }

        public void Draw(Game g)
        {
            int size = Game.CellSize;

            if (this == g.current) {
                g.color = Color.DarkOrange;
                g.DrawRect(x * size, y * size, size, size);
                g.color = Color.Black;

            }
            // else
            //     g.color = Color.Black;

            if (walls[0]) {
                g.DrawRect(x * size, y * size, size, 1);
            }
            if (walls[1]) {
                g.DrawRect((x + 1) * size, y * size, 1, size);
            }
            if (walls[2]) {
                g.DrawRect(x * size, (y + 1) * size, size, 1);
            }
            if (walls[3]) {
                g.DrawRect(x * size, y * size, 1, size);
            }
            
            // g.color = visited ? Color.Orange : Color.Black;
            //g.DrawRect(x * size, y * size, 15, 15);
        }

        public Cell GetNeighbour() {
            List<Cell> neighbours = new();


            if (x > 0 && !maze[x-1, y].visited) {
                neighbours.Add(maze[x-1, y]);
            }

            if (y > 0 && !maze[x, y-1].visited) {
                neighbours.Add(maze[x, y-1]);
            }

            if (x < maze.GetLength(0) - 1 && !maze[x+1, y].visited) {
                neighbours.Add(maze[x+1, y]);
            }

            if (y < maze.GetLength(1) - 1 && !maze[x, y+1].visited) {
                neighbours.Add(maze[x, y+1]);
            }

            if (neighbours.Count > 0) {
                return neighbours[Random.Shared.Next(0, neighbours.Count)];
            }

            return null;
        }
        public void BreakWall(Cell other)
        {
            if (x - other.x == 1) {
                this.walls[3] = false;
                other.walls[1] = false;
            }
            if (x - other.x == -1) {
                this.walls[1] = false;
                other.walls[3] = false;
            }
            if (y - other.y == 1) {
                this.walls[0] = false;
                other.walls[2] = false;
            }
            if (y - other.y == -1) {
                this.walls[2] = false;
                other.walls[0] = false;
            }
        }
        

    }
}