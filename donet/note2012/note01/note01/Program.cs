using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace note01
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 声明两个变量:int n1=10,n2=20
            //int n1 = 10, n2 = 20;
            //int temp = n1;
            //n1 = n2;
            //n2 = temp;
            //Console.WriteLine("n1={0},n2={1}",n1,n2);
            //Console.ReadKey();
            #endregion
            #region 交换变量不使用第三个变量
            //int n1 = 10, n2 = 20;
            //n1 = n1 + n2;
            //n2 = n1 - n2;
            //n1 = n1 - n2;
            //Console.WriteLine("n1={0},n2={1}",n1,n2);
            //Console.ReadKey();
            #endregion
            #region 交换变量第三种方法
            //int n1 = 10, n2 = 20;
            //n2 = n1 + (n1 = n2) * 0;
            //Console.WriteLine("n1={0},n2={1}",n1,n2);
            //Console.ReadKey();
            #endregion
            #region  方法实现两个变量交换
            //int n1 = 10, n2 = 20;
            //Swap(ref n1,ref n2);
            //Console.WriteLine("n1={0},n2={1}",n1,n2);
            //Console.ReadKey();
            #endregion
            #region 通过编程计算1+2-3+4-5+6-7+...100值
            //int sum = 0;
            //for (int i = 1; i <=100; i++)
            //{
            //    if (i==1 || i%2==0)
            //    {
            //        sum += i;
            //    }
            //    else
            //    {
            //        sum += (i * -1);
            //    }
            //}
            //Console.WriteLine(sum);
            //Console.ReadKey();
            #endregion
            #region 请用户输入字符串，计算字符中的字符个数，并输出
            //string msg = "你好a!中国";
            //Console.WriteLine(msg.Length);
            //Console.ReadKey();
            #endregion
            #region 取最大值
            //Console.WriteLine("请输入一个数字：");
            //int n1 = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("再次输入一个数字：");
            //int n2 = Convert.ToInt32(Console.ReadLine());
            //int result=GetMaxValues(n1,n2);
            //int result = GetMaxValues(123, 13, 2, 4, 5);
            //Console.WriteLine(result);
            //Console.ReadKey();
            #endregion
            #region sum 1-100之间的和
            //int sum = 0;
            //for (int i = 1; i <=100; i++)
            //{
            //    sum += i;
            //}
            //Console.WriteLine(sum);
            //Console.ReadKey();
            #endregion
            #region 奇数1-100的和
            //int sum = 0;
            //for (int i = 1; i <=100; i++)
            //{
            //    if (i%2!=0)
            //    {
            //        sum += i;
            //    }
            //}
            //Console.WriteLine(sum);
            //Console.ReadKey();
            #endregion
            #region 定义一个方法判断一个整数是不是“质数”
            //while (true)
            //{
            //    Console.WriteLine("请输入一个整数：");
            //    int n = Convert.ToInt32(Console.ReadLine());
            //    bool b = IsPrimeNumber(n);
            //    Console.WriteLine(b);
            //}
            #endregion
            #region 计算1-100之间的所有质数（素数）的和
            //int sum = 0;
            //for (int i = 2; i <= 100; i++)
            //{
            //    if (IsPrimeNumber(i))
            //    {
            //        sum += i;
            //    }
            //}
            //Console.WriteLine(sum);
            //Console.ReadKey();
            #endregion
            #region 定义方法来实现：有一个整数数组：{1,3,5,7,90,2,4,6,8,10}找出其中最大值，并输出不能调用数组自身的Max()方法，自己定义一个方法。
            //int[] arrNumber = { 1, 3, 5, 7, 90, 2, 4, 6, 8, 10 };
            //int max = GetMaxValuesFromArray(arrNumber);
            ////alt+shift+f10;
            //Console.WriteLine(max);
            //Console.ReadKey();
            #endregion
        }

        private static int GetMaxValuesFromArray(int[] arrNumber)
        {
            int max = arrNumber[0];
            for (int i = 1; i < arrNumber.Length; i++)
            {
                if (arrNumber[i] > max)
                {
                    max = arrNumber[i];
                }
            }
            return max;
        }


        private static bool IsPrimeNumber(int n)
        {
            if (n > 1)
            {
                //Math.Sqrt()//开平方
                //循环判断除了1，与n本身以于，小于n的其他自然数中是否还有其他数字可以被整除
                for (int i = 2; i < n; i++)
                {
                    if (n%i==0)
                    {
                        return false;
                    }
                }
                return true;
            }
            else
            {
                throw new ArgumentException("数字小于1不是质数！");
            }
        }
        static int GetMaxValues(int n1, int n2)
        {
            return n1 > n2 ? n1 : n2;
        }
        static int GetMaxValues(params int[] nums) {
            //对数组求最大值
            int max = nums[0];
            for (int i = 1; i < nums.Length; i++)
            {
                if (nums[i]>max)
                {
                    max = nums[i];
                }
            }
            return max;
        }
        //static void GetMaxValues()
        //{
        //    Console.WriteLine("请输入一个数字：");
        //    int n1 = Convert.ToInt32(Console.ReadLine());
        //    Console.WriteLine("再次输入一个数字：");
        //    int n2 = Convert.ToInt32(Console.ReadLine());
        //    if (n1>n2)
        //    {
        //        Console.WriteLine("最大值是{0}",n1);
        //    }
        //    else
        //    {
        //        Console.WriteLine("最大值是{0}",n2);
        //    }
        //}

        private static void Swap(ref int n1,ref int n2)
        {
            int tmp = n1;
            n1 = n2;
            n2 = tmp;
        }
    }
}
