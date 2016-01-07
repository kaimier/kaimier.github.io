using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace note01
{
    class Person
    {
        private string _name;
        public string Name
        {
            get
            {
                return _name;
            }
            set
            {
                _name = value;
            }
        }
        public string Gender
        {
            get;
            set;
        }
        public int Age { get; set; }
        public virtual void SayHi()
        {
            Console.WriteLine("Hi~~~ in Person");
        }
    }
}
