using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _018枚举
{
    /// <summary>
    /// 定义了一个类型叫Gender的枚举类型，定义是不用加“”双引号。
    /// </summary>
    enum Gender
    {
        男,
        女
    }
    class Program
    {
        static void Main(string[] args)
        {
            #region 常量：
            /*
             * const 类型 常量名=常量值
             */
            //const double PI = 3.14;
            /*
             * 枚举：
             * 让我们定义一种枚举类型并且在定义这种类型时我们要指定这个类型的所有值
             * enum 自己起的类型名称（值1，值2，值3，。。。）;
             */
            //枚举的定义，一般和类定义在同一个级别
            //Gender sex;
            //sex = Gender.男;
            //Console.WriteLine(sex);
            
            #endregion
            #region 如何把一个字符串转换成枚举类型：
            /*
             * (enum)(Enum.Parse(typeof(enum),"待转换的字符串");
             */
            Gender sex;
            string s = Console.ReadLine();
            try
            {
                sex = (Gender)(Enum.Parse(typeof(Gender), s));
                Console.WriteLine("你输入的性别为：{0}",sex.ToString());
            }
            catch (Exception)
            {

                Console.WriteLine("你输入的性别有误！");
            }
            
            
            #endregion
            Console.ReadKey();
        }
    }
}
