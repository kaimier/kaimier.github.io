﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace note02_索引器_
{
    class ItcastClass
    {
        private string[] _names = { "科比", "乔丹", "加内特", "杨中科", "杨洪波", "赵剑宇" };
        private string[] _friends = { };
        public int NameLength
        {
            get
            {
                return _names.Length;
            }
        }
        public string this[int index]
        {
            get
            {
                return _names[index];
            }
            set
            {
                _names[index] = value;
            }
        }
    }
}
