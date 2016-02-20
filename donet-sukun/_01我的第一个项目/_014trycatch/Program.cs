using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _014trycatch
{
    class Program
    {
        static void Main(string[] args)
        {
            #region try...catch...
            try
            {
                Console.WriteLine("请输入你的语文成绩？");
                int chinese = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("请输入你的数学成绩？");
                int math = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("总和：{0}",chinese+math);
            }
            catch
            {
                Console.WriteLine("你刚刚输入的数据有问题，请重新运行！");
            }
            Console.ReadKey();
            #endregion
        }
    }
}
