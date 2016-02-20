using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _016运算符
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 表达式
            //int age = 18;
            ////age++;//一元表达式（age=age+1）;
            ////int sum = age++ - 10;//(age++)后加取原来的值18;
            //int sum = ++age - 10; //(++age)前加取加1后的值;19;
            //Console.WriteLine("sum={0}", sum);
            //Console.WriteLine("age={0}", age);
            #endregion
            #region 关系表达式
            //int dxZl = 1500;
            //int lsZl = 1;
            //bool isRight = dxZl > lsZl;
            //string zsName = "zhangshan";
            //string lsName = "lisi";
            //bool isRight1 = zsName == lsName;
            //Console.WriteLine(isRight1);
            //Console.WriteLine(isRight);//true;
            #endregion
            #region 逻辑表达式：
            // && || ！
            int age = 10;
            int wight = 90;
            bool result = age >= 18 && wight >= 100;
            Console.WriteLine(result); //false
            #endregion
            Console.ReadKey();
        }
    }
}
