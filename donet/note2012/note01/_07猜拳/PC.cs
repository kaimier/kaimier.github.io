using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07猜拳
{
    public class PC
    {
        public string Fist
        {
            get;
            set;
        }
        /// <summary>
        /// 计算机随机出拳
        /// </summary>
        /// <returns></returns>
        public int ShowFist()
        {
            Random rdn = new Random();
            int n = rdn.Next(1, 4);
            switch (n)
            {
                case 1:
                    this.Fist="剪刀";
                    break;
                case 2:
                    this.Fist = "石头";
                    break;
                case 3:
                    this.Fist = "布";
                    break;
                default:
                    break;
            }
            return n;
        }
    }
}
