using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07猜拳
{
    public class CaiPan
    {
        /// <summary>
        /// 判断是否玩家赢了
        /// </summary>
        /// <returns>返回结果 用户输了：-1,0,1</returns>
        public static int IsPlayerWin(int playerFst,int pcFist)
        {
            if (playerFst==pcFist)
            {
                return 0;
            }
            else if(playerFst-pcFist==-2||playerFst-pcFist==1)
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
    }
}
