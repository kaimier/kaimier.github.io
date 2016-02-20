using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _012变量
{
    class Program
    {
        /// <summary>
        /// 数据类型-》
        ///         1：数值  --》a.整形 ---》 int等
        ///                      b.非整形 --->double、decimal
        ///         2:非数值 --》char、String
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            decimal money;
            //money = 1000.25; //在c#中直接写小数是double类型，所类型不一至报错
            money = 1000.25m;//在小数后加m表示是decimal类型
            string zsName, lsName, wwName;
            int zsAge = 18, lsAge = 20, wwAge = 22;
            Console.WriteLine(money);
            /*变量的命名规则：
             * 1.必须以"字母"、_或@开头
             * 2.后面可以任意"字母"、数字、下划线。
             */
            Console.ReadKey();
            
        }
    }
}
