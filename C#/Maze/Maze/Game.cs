﻿using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.IO;

namespace Maze
{
    public class Game : Microsoft.Xna.Framework.Game
    {
        public const int CellSize = 20;

        private GraphicsDeviceManager _graphics;
        private SpriteBatch _spriteBatch;

        private Texture2D texture;

        Cell[,] maze;
        Stack<Cell> stack = new();
        public Cell current;

        int width, height;

        public Game()
        {
            _graphics = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
            IsMouseVisible = true;
        }

        protected override void Initialize()
        {
            // TODO: Add your initialization logic here

            texture = new Texture2D(GraphicsDevice, 1, 1);
            texture.SetData(new Color[] { Color.White });

            width = GraphicsDevice.Viewport.Width;
            height = GraphicsDevice.Viewport.Height;
            maze = new Cell[width / CellSize, height / CellSize];
            for (int i = 0; i < maze.GetLength(0); i++)
            {
                for (int j = 0; j < maze.GetLength(1); j++)
                {
                    maze[i, j] = new Cell(maze, i, j);
                }

            }

            current = maze[0, 0];
            current.visited = true;
            // while (true)
            // {
            //     Cell neighbor = current.GetNeighbour();
            //     if (neighbor != null) {
            //         neighbor.visited = true;
            //         current.BreakWall(neighbor);
            //         stack.Push(neighbor);
            //         current = neighbor;
            //     }
            //     else if (stack.Count > 0) {
            //         current = stack.Pop();
            //     }
            //     else
            //     {
            //         break;
            //     }
            // }

            base.Initialize();
        }

        protected override void LoadContent()
        {
            _spriteBatch = new SpriteBatch(GraphicsDevice);

            // TODO: use this.Content to load your game content here
        }

        protected override void Update(GameTime gameTime)
        {
            if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Escape))
                Exit();

            Cell neighbor = current.GetNeighbour();
            if (neighbor != null) {
                neighbor.visited = true;
                current.BreakWall(neighbor);
                stack.Push(neighbor);
                current = neighbor;
            }
            else if (stack.Count > 0) {
                current = stack.Pop();
            }
            else
            {
                
            }

            base.Update(gameTime);
        }

        protected override void Draw(GameTime gameTime)
        {
            GraphicsDevice.Clear(Color.CornflowerBlue);

            _spriteBatch.Begin();

            for (int i = 0; i < maze.GetLength(0); i++)
            {
                for (int j = 0; j < maze.GetLength(1); j++)
                {
                    maze[i, j].Draw(this);
                }

            }

            _spriteBatch.End();

            base.Draw(gameTime);
        }

        public Color color = Color.Black;
        public void DrawRect(int x, int y, int width, int height)
        {
            _spriteBatch.Draw(texture, new Rectangle(x, y, width, height), color);
        }
    }
}
