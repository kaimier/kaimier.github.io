using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06面向对象计算器
{
    class Cal
    {
        public double Number1
        {
            get;
            set;
        }
        public double Number2
        {
            get;
            set;
        }
        public double JiSuan(string caozuofu)
        {
            double r = 0;
            switch (caozuofu)
            {
                case "+":
                    r = this.Number1 + this.Number2;
                    break;
                case "-":
                    r = this.Number1 - this.Number2;
                    break;
                case "*":
                    r = this.Number1 * this.Number2;
                    break;
                case "/":
                    r = this.Number1 / this.Number2;
                    break;
            }
            return r;
        }
    }
}
