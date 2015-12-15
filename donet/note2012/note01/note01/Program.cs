using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
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

            #region 定义方法来实现：有一个字符串数组：{"马龙","迈克尔乔丹","雷吉米勒","蒂姆邓肯","科比布莱恩特"},请输入字符数最多的字符串
            //string[] name = { "马龙", "迈克尔乔丹", "雷吉米勒", "蒂姆邓肯", "科比布莱恩特" };
            //string[] name = new string[] { "马龙", "迈克尔乔丹", "雷吉米勒", "蒂姆邓肯", "科比布莱恩特","老苏最长长长长" };
            //string userName = GetLongestName(name);
            //Console.WriteLine(userName);//科比布莱恩特
            //Console.ReadKey();
            #endregion
            #region 定义方法实现：请计算出一个整形数组的平均值。{1,3,5,7,90,2,4,6,8,10}
            //int[] arrInt = { 1, 3, 5, 7, 90, 2, 4, 6, 8, 10 };
            //double avg = GetAvgFromArray(arrInt);
            //Console.WriteLine("平均值是：{0:F}",avg);
            //Console.ReadKey();
            #endregion
            #region 请通过冒泡排序法对整数数组{1,3,,5,7,90,2,4,6,8,10}实现升序排序
            //int[] arrInt={1,3,5,7,90,2,4,6,8,10};
            //MySort(arrInt); //引用类型不需要返回值
            //for (int i = 0; i < arrInt.Length; i++)
            //{
            //    Console.WriteLine(arrInt[i]);
            //}
            //Console.ReadKey();
            #endregion
            #region 请输入一个十进制数字，计算出对应的二进制数字，以字符串方式输出。
            //while (true)
            //{
            //    Console.WriteLine("请输入一个十进制数字:");
            //    int num = Convert.ToInt32(Console.ReadLine());
            //    string result = GetBinaryNumber(num);
            //    Console.WriteLine(result);
               
            //}
            #endregion
            #region 请输入一个年份，判断该年份是否为闰年。条件：1--> 能被4整除但不能被100整除; 2--> 能被400整除
            //while (true)
            //{
            //    Console.WriteLine("请输入一个年份：");
            //    int year = Convert.ToInt32(Console.ReadLine());
            //    bool b = IsLeapYear(year);
            //    Console.WriteLine(b);
            //}
            #endregion
            #region 在控制台输出如下显示的“乘法口诀表”
            //for (int i = 1; i <= 9; i++)
            //{
            //    for (int j = 1; j <= i; j++)
            //    {
            //        Console.Write("{0}*{1}={2}\t",j,i,j*i);
            //    }
            //    Console.WriteLine();
            //}
            //Console.ReadKey();
            #endregion
            #region 编写一个函数，实现类似.net中trim()函数的功能：去两端空格 
            //string msg = "    你 好 吗？  ";
            //Console.WriteLine("==================="+MyTrim(msg)+"==============");
            //Console.ReadKey();
            #endregion
            #region 随机生成10个1-100之间的不重复的偶数，填充到List<int>集合中。
            //List<int> list = new List<int>();
            //Random random = new Random();
            //int index = 0;
            //while (list.Count<10)
            //{
            //    //Random random = new Random();循环次数巨增
            //    int num = random.Next(1, 101);
            //    if (num%2 == 0 && !list.Contains(num))
            //    {
            //        list.Add(num);
            //    }
            //    index++;
            //}
            ////for (int i = 0; i < list.Count; i++)
            ////{
            ////    Console.WriteLine(list[i]);
            ////}
            //foreach (var item in list)
            //{
            //    Console.WriteLine(item);
            //}
            //Console.WriteLine("==============");
            //Console.WriteLine(index);
            //Console.ReadKey();
            #endregion
            #region random 参数种子一样，随机数一样
            //Random random = new Random(98765);
            //for (int i = 0; i < 20; i++)
            //{
            //    int n = random.Next(1, 101);
            //    Console.WriteLine(n);
            //}
            //Console.ReadKey();
            #endregion
            #region 有如下字符串：【"患者：“大夫，我咳嗽得很重。”     大夫：“你多大年记？”     患者：“七十五岁。”     大夫：“二十岁咳嗽吗”患者：“不咳嗽。”     大夫：“四十岁时咳嗽吗？”     患者：“也不咳嗽。”     大夫：“那现在不咳嗽，还要等到什么时咳嗽？”"】。需求：①请统计出该字符中“咳嗽”一词的出现次数，以及每次“咳嗽”出现的索引位置。②扩展（*）：统计出每个字符的出现次数。
              //1.正则
            //string sourceStr = "患者：“大夫，我咳嗽得很重。”     大夫：“你多大年记？”     患者：“七十五岁。”     大夫：“二十岁咳嗽吗”患者：“不咳嗽。”     大夫：“四十岁时咳嗽吗？”     患者：“也不咳嗽。”     大夫：“那现在不咳嗽，还要等到什么时咳嗽？”";
            //string str = "咳嗽";
            //RegexIndex(sourceStr,str);
            //Console.ReadKey();
            //2.split
            //string[] s = { "咳嗽" };
            //string[] result = sourceStr.Split(s, StringSplitOptions.None);
            //for (int i = 0; i < result.Length; i++)
            //{
            //    Console.WriteLine(result[i]);
            //}
            //int num = result.Length - 1;
            //Console.WriteLine("咳嗽出现{0}次", num);
            //Console.WriteLine("每次咳嗽出现的索引位置:");
            //int worldLength = 0;
            //for (int i = 0; i < result.Length-1; i++)
            //{
            //    if (i==0)
            //    {
            //        worldLength += result[i].Length;
            //    }
            //    else
            //    {
            //        worldLength+=result[i].Length+2;
            //    }
            //    Console.WriteLine("第{0}次出现的位置是{1}",i+1,worldLength);
            //}
            
            //3.IndexOf() 没找到返回-1
            //string word ="咳嗽";
            //int index = 0;
            //int count = 0;
            //while ((index= sourceStr.IndexOf(word,index))!=-1)
            //{
            //    count++;
            //    Console.WriteLine("第{0}次出现【咳嗽】,出现索引是：{1}",count,index);
            //    index += word.Length;
            //}
            //Console.ReadKey();
            #endregion
            #region 将字符串"  hello      world,你  好 世界   !    "两端空格去掉，并且将其中的所有其他空格都替换成一个空格，输出结果为："hello world,你 好 世界 !"
            //string msg = "  hello      world,你  好 世界   !    ";
            //msg = msg.Trim();
            ////使用Split
            //string[] result = msg.Split(new char[]{' '},StringSplitOptions.RemoveEmptyEntries);
            ////把result字符串数组中的第个字符使用' '连起来
            //string str=string.Join(" ", result);
            //Console.WriteLine(str);
            //Console.ReadKey();
            #endregion
            #region  请统计出数组：{1,2,3,4,5,6,7,8,9,1,2,3,79,23,45,64,9,3,2,4}中的不重复的数字的个数。【思考】如果题目要求变更为去除重复数字放到一个新数组中，如何实现？
            //int[] arrInt = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 79, 23, 45, 64, 9, 3, 2, 4, 1, 1, 1, 1, 1, 1,1000};
            //统计不重复的元素个数
            //int count = 0;
            //for (int i = 0; i < arrInt.Length; i++)
            //{
            //    bool b = true;
            //    for (int j=0;j<arrInt.Length; j++)
            //    {
            //        if (arrInt[i]==arrInt[j] && i!=j)
            //        {
            //            b=false;
            //            break;
            //        }
            //    }

            //    if (b)
            //    {
            //        count++;
            //    }
            //}
            //Console.WriteLine("不重复的元素个数是{0}",count);
            //Console.ReadKey();
            //Array.Sort(arrInt);
            //List<int> list = new List<int>();
            //for (int i = 0; i < arrInt.Length-1; i++)
            //{
            //    if (arrInt[i] !=arrInt[i+1])
            //    {
            //        list.Add(arrInt[i]);
            //    }
            //}
            //list.Add(arrInt[arrInt.Length - 1]);
            //for (int i = 0; i < list.Count; i++)
            //{
            //    Console.WriteLine(list[i]);
            //}
            //Console.ReadKey();
            #endregion
            #region 用户输入quit时
            //List<string> list = new List<string>();
            //string userName = string.Empty;
            //do
            //{
            //    Console.WriteLine("请输入姓名:");
            //    userName = Console.ReadLine();
            //    list.Add(userName);
            //} while (userName.ToLower()!="quit");
            //list.RemoveAt(list.Count - 1);
            //Console.WriteLine("共输入了:{0}个学生，每个学生信息是：",list.Count);
            //foreach (string item in list)
            //{
            //    Console.WriteLine(item);
            //}

            List<string> list = new List<string>();
            string userName = string.Empty;
            int count = 0;
            do
            {
                Console.WriteLine("请输入姓名：");
                userName = Console.ReadLine();
                if (userName.IndexOf('王')==0)
                {
                    count++;
                }
                list.Add(userName);
            } while (userName.ToLower() != "quit");
            list.RemoveAt(list.Count - 1);
            Console.WriteLine("共输入了：{0}个学生，每个学生信息是：",list.Count);
            foreach (string name in list)
            {
                Console.WriteLine(name);
            }
            Console.WriteLine("姓王的同学是{0}",name);
            Console.ReadKey();
            #endregion
        }

        private static void RegexIndex(string sourceStr, string str)
        {
            Regex r = new Regex(str);
            MatchCollection m = r.Matches(sourceStr);
            Console.WriteLine(str+"总共出现了{0}次\r\n 位置分别为",m.Count);
            foreach (Match ma in m)
            {
                Console.Write(ma.Index+"  ");
            }
        }
        /// <summary>
        /// 模拟Trim()去掉字符串两端的空白符
        /// </summary>
        /// <param name="msg"></param>
        /// <returns></returns>
        private static string MyTrim(string msg)
        {
            int start = 0;
            int end = msg.Length - 1;
            while (start<msg.Length)
            {
                if (!char.IsWhiteSpace(msg[start]))
                {
                    break;
                }
                start++;
            }
            while (end>=start)
            {
                if (!char.IsWhiteSpace(msg[end]))
                {
                    break;
                }
                end--;
            }
            return msg.Substring(start, end-start+1);
        }
        /// <summary>
        /// 判断是否是闰年
        /// </summary>
        /// <param name="year"></param>
        /// <returns></returns>
        private static bool IsLeapYear(int year)
        {
            if ((year%4==0 && year%100!=0) || year%400==0)
            {
               return true;
            }
            else
            {
                return false;
            }
        }

        private static string GetBinaryNumber(int num)
        {
            #region 1
            //StringBuilder sb = new StringBuilder();
            //while (num >= 2)
            //{
            //    int shang = num / 2;
            //    int yushu = num % 2;
            //    sb.Append(yushu);

            //    num = shang;
            //}
            //sb.Append(num);
            //return sb.ToString();
            #endregion
            #region list集合
            List<string> list = new List<string>();
            while (num >= 2)
            {
                int shang = num / 2;
                int yushu = num % 2;
                list.Add(yushu.ToString());
                num = shang;
            }
            list.Add(num.ToString());
            list.Reverse();

            return string.Join("", list.ToArray());
            #endregion

        }

        private static void MySort(int[] arrInt)
        {
            //多层循环条件是比较的轮数，相邻两个比较要比较多少轮。
            for (int i = 0; i < arrInt.Length-1; i++)
            {
                //这个循环是用来进行相邻两两比较的
                for (int j = arrInt.Length-1; j>i; j--)
                {
                    if (arrInt[j]<arrInt[j-1])
                    {
                        int tmp = arrInt[j];
                        arrInt[j] = arrInt[j - 1];
                        arrInt[j - 1] = tmp;
                    }
                }
            }
        }

        private static double GetAvgFromArray(int[] arrInt)
        {
            int sum = 0;
            for (int i = 0; i < arrInt.Length; i++)
            {
                sum += arrInt[i];
            }
            //sum*1.0 转为double类型
            //Math.Round(value,num);
            return Math.Round(sum*1.0 / arrInt.Length,2);
        }

        private static string GetLongestName(string[] name)
        {
            string result = name[0];
            for (int i = 1; i < name.Length; i++)
            {
                if (result.Length<name[i].Length)
                {
                    result = name[i];
                }
            }
            return result;
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
