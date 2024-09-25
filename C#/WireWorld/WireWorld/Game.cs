using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;

namespace WireWorld
{
    public class Game : Microsoft.Xna.Framework.Game
    {
        private GraphicsDeviceManager _graphics;
        private SpriteBatch _spriteBatch;

        private Texture2D texture;

        CellType[,] cells;

        public Game()
        {
            _graphics = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
            IsMouseVisible = true;
        }

        protected override void Initialize()
        {
            texture = new Texture2D(GraphicsDevice, 1, 1);
            texture.SetData(new Color[] { Color.White });

            // TODO: Add your initialization logic here
            cells = new CellType[40, 24];
            cells[2, 3] = CellType.Wire;
            cells[3, 2] = CellType.Head;
            cells[5, 5] = CellType.Tail;

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

            // TODO: Add your update logic here

            base.Update(gameTime);
        }

        protected override void Draw(GameTime gameTime)
        {
            GraphicsDevice.Clear(Color.CornflowerBlue);
            _spriteBatch.Begin();

            fill = Color.Black;
            //DrawRect(100, 100, 200, 50);

            for (int i = 0; i < 40; i++)
            {
                for (int j = 0; j < 24; j++)
                {
                    if (cells[i, j] == CellType.Empty) {
                        fill = Color.Black;
                    }
                    else if (cells[i, j] == CellType.Wire) {
                        fill = Color.White;
                    }
                    else if (cells[i, j] == CellType.Head) {
                        fill = Color.Gold;
                    }
                    else if (cells[i, j] == CellType.Tail) {
                        fill = Color.DarkGoldenrod;
                    }
                    DrawRect(i * 20, j * 20, 20, 20);
                }
            }




            // TODO: Add your drawing code here

            _spriteBatch.End();
            base.Draw(gameTime);
        }

        public static Color fill = Color.Black;
        public static Color stroke = Color.Black;
        public void DrawRect(int x, int y, int width, int height)
        {
            _spriteBatch.Draw(texture, new Rectangle(x, y, width, height), fill);
            // _spriteBatch.Draw(texture, new Rectangle(x + 1, y + 1, width - 2, height - 2), fill);
        }
    }
}
