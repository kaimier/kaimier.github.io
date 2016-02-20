using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _023方法重载
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             * 方法重载，参数的类型和参数的方法不同，跟返回值无关
             */

            /*
             * 多个返回值：
             */
            int number = 10;
            int result =Test(out number);
            Console.WriteLine("number={0},result={1}",number,result);
            Console.ReadKey();
        }
        static int Test(out int a)
        {
            a = 20;
            a = a + 1;
            return 200;
        }
    }
}
