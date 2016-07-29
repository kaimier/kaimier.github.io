using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _013交换两个变量的值
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 交换两个变量的值
                //int a = 10;
                //int b = 5;
                ////Console.WriteLine("a={0} b={1}",b,a);
                //int tmp;
                //tmp = a;
                //a = b;
                //b = tmp;
                //Console.WriteLine("a={0},b={1}",a,b);
            #endregion
            #region 算术运算的习题
            //double pi = 3.14;
            //int r = 5;
            //double s = r * r * pi;
            //Console.WriteLine("s={0}",s);
            #endregion
            #region 第三题
            /*
             * 1.参与运算的两个数据类型必须兼容
             * 2.必须一边的数据类型表示范围小，一边的范围大，且把小的转向大的不丢失精度
             */
            //double tshirtPrice = 35;
            //double trousesPrice = 120;
            //double totalMoney = 3 * tshirtPrice + 2 * trousesPrice;
            //double disMoney = totalMoney * 0.88;
            //Console.WriteLine("购物总计：{0}元，打8.8折后应付：{1}元",totalMoney,disMoney);
            #endregion
            #region 第四题
            Console.WriteLine("请输入你的语文成绩？");
            int chinese = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("请输入的数学成绩？");
            int math = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("你的总成绩为：{0}",chinese+math);
            #endregion
            Console.ReadKey();
        }
    }
}
