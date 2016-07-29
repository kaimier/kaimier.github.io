using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _21参数
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             * 方法没有返回值，返回值类型写void
             * 方法没有参数，()不能省略             * 
             * 如果是静态方法（由static修饰的)则使用类名.方法名();
             */
            #region 返回值xxx
            Console.WriteLine("你确定要关机？ y/n");
            ReadAnswer();
            #endregion
        }

        public static void ReadAnswer()
        {
            string result = "";
            do
            {
                result = Console.ReadLine();
                if (result !="y" && result!="n")
                {
                    Console.WriteLine("输入有误，请重新输入！");
                }
            } while (result!="y" && result !="n");
        }
    }
}
