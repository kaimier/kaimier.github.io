using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0205ArraryList集合长的问题
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 集合长度的问题
            //ArrayList list = new ArrayList();
            ////count 表示这个集合中实际包含的元素的个数
            ////capcity 表示这个集合中可以包含的元素的个数
            //list.Add(1);
            //list.Add(1);
            //list.Add(1);
            //list.Add(1);
            //list.Add(1);
            //Console.WriteLine(list.Count);
            //Console.WriteLine(list.Capacity); 
            #endregion
            #region 创建一个集合，里面添加一些数字，求平均值与各
            //ArrayList list = new ArrayList();
            //list.AddRange(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 });
            //int sum = 0;
            //for (int i = 0; i < list.Count; i++)
            //{
            //    sum += (int)list[i];
            //}
            //Console.WriteLine(sum);

            #endregion
            #region MyRegion
            ArrayList list = new ArrayList();
            Random r = new Random();
            for (int i = 0; i < 10; i++)
            {
                int rNumber = r.Next(0, 10);
                if (!list.Contains(rNumber))
                {
                    list.Add(rNumber);
                }
                else
                {
                    i--;
                }
            }
            for (int i = 0; i < list.Count; i++)
            {
                Console.WriteLine(list[i]);
            }
            #endregion
            Console.ReadKey();
        }
    }
}
