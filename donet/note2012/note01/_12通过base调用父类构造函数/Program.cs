using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12通过base调用父类构造函数
{
    class Program
    {
        static void Main(string[] args)
        {
            Son son = new Son("张三", 1000, "AB");

        }
    }

    class Father
    {
        public Father(string xingming, double caichan, string xueixng)
        {
            this.LastName = xingming;
            this.Property = caichan;
            this.BloodType = xueixng;
        }
        public string LastName { get; set; }
        public double Property { get; set; }
        public string BloodType { get; set; }
    }
    class Son:Father
    {
        public Son(string xm,double cc,string xx)
            : base(xm, cc, xx)
        {

        }
        public void PlayGame()
        {
            Console.WriteLine("Dota中......");
        }
    }
    class Daughter : Father
    {
        public Daughter(string xm, double cc, string xx)
            :base(xm,cc,xx)
        {

        }
        public void Dance()
        {
            Console.WriteLine("正在热歌劲舞中......");
        }
    }
}
