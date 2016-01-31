using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _019结构
{
    public enum Gender
    {
        男,
        女
    }
    /// <summary>
    /// 定义一个名称叫Person的结构
    /// </summary>
    public struct Person
    {
        public string name;
        public Gender sex;
        public int age;
    }
    class Program
    {
        static void Main(string[] args)
        {
            /*
             * 为什么要用结构:
             * 1>比如我们上课讲的为了存储一个人的信息，要声明一组变量，当我们要存储n个人的信息时，就要声明n组变量，麻烦。。。
             * 2>存储一个人信息的这几个变量间没有关系，容易记乱。
             * 语法：
             * 访问修饰符 struct 结构名
             * {
             *      定义结构成员
             * }
             * 通过变量.成员名来访问结构的成员名
             */
            Person onePerson;
            onePerson.name = "zhangshan";
            onePerson.age = 20;
            onePerson.sex = Gender.男;
            Console.WriteLine("{0},{1},{2}",onePerson.name,onePerson.age,onePerson.sex);
            Console.ReadKey();
            /*
             * bit
             * Byte
             * 1KB=1024B
             * 1MB=1024KB
             * 1GB=1024MB
             * 1TB=1024GB
             * bps 网络带宽
             * 2Mb 4Mb
             */

        }
    }

}
