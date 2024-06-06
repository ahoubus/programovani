using System;
using System.Collections.Generic;
using Maze;
using Microsoft.Xna.Framework;

namespace Maze
{
    class Cell
    {
        public int x, y;
        public bool visited = false;
        Cell[,] maze;

        public Cell(Cell[,] maze, int x, int y) {
            this.maze = maze;
            this.x = x;
            this.y = y;
        }

        public void Draw(Game g)
        {
            int size = Game.CellSize;
            g.color = visited ? Color.Orange : Color.Black;
            g.DrawRect(x * size, y * size, 15, 15);
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

    }
}