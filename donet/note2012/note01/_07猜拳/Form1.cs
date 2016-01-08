using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace _07猜拳
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        
        private void Form1_Load(object sender, EventArgs e)
        {
            

        }
        //用户点击“石头”
        private void button1_Click(object sender, EventArgs e)
        {
            //怎么获取当前用户点击的是哪个按钮
            Button btn = (Button)sender;
            
            string userfist = btn.Text;
            StartGame(userfist);
        }

        private void StartGame(string userfist)
        {
            Player p1 = new Player();
            int playerfist = p1.ShowFist(userfist);
            this.labYou.Text = p1.Fist;

            PC pc = new PC();
            int pcFist = pc.ShowFist();
            labPC.Text = pc.Fist;
            int r = CaiPan.IsPlayerWin(playerfist, pcFist);

            switch (r)
            {
                case 0:
                    lblResult.Text = "平局";
                    break;
                case 1:
                    lblResult.Text = "赢了";
                    break;
                case -1:
                    lblResult.Text = "输了";
                    break;
            }
        }

        //private void button2_Click(object sender, EventArgs e)
        //{
        //    string userfist = "剪刀";
        //    StartGame(userfist);
        //}

        //private void button3_Click(object sender, EventArgs e)
        //{
        //    string userfist = "布";
        //    StartGame(userfist);
        //}
    }
}
