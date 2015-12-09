using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cshap
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 变量20110301（shangwu31.avi）
            //int i1 = 5;
            ////int i1 = 6;
            //i1 = 6;//一个变量只能申明一次可以多次使用
            //Console.WriteLine(i1);//6
            #endregion
            #region char
            //char c1 = 'a';
            //char c2='杨'汉字也是一个char
            //c1='ab';char表示一个字符
            //char c3="a"; 只能是单引号
            //Console.WriteLine(c1);
            #endregion
            #region int
            //Console.WriteLine(int.MaxValue);int 最大值
            //Console.WriteLine(int.MinValue);int 最小值
            //int i3 = 99999;
            //int i4 = 9999999999999; long类型
            #endregion
            #region long
            //Console.WriteLine(long.MaxValue);
            //Console.WriteLine(long.MinValue);
            //long l1 = 3333333333;// long->int64; int->int32
            #endregion
            #region boolen
            //bool b1 = true;
            //bool b2 = false;
            #endregion
            #region string 字符串
            //string name = "tom";
            ////name = "to\"m"; \为转义符
            //char c = '\n'; // 换行，看起来是两个，其实\和后面是一体的
            //string name = "to\nm";

            //Console.WriteLine(c);
            //Console.WriteLine(name);
            #endregion
            #region 转义符
            //‘\’和‘@’
            //@是表示不把\当成转义符
            string name = @"C:\Program Files\system32\drives\edc";
            Console.WriteLine(name);
            #endregion
            Console.ReadKey();
        }
    }
}
