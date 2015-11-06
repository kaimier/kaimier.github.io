<?php 
    /**
    *  Comment
    */
    class Comment
    {
        private $data=array();
        function __construct($data)
        {
            $this->data=$data;
        }
        /**
         * 检测用户输入的数据
         * @param  [type] $arr [description]
         * @return [type]      [description]
         */
        public static function validate($arr)
        {
            if (!(filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL))) {
                $errors['email']='请输入合法邮箱';
            }
            if (!(filter_input(INPUT_POST, 'url',FILTER_VALIDATE_URL))) {
                    $url='';
             }
            if (!(filter_input(INPUT_POST,'content',FILTER_CALLBACK,array('options'=>'Comment::validate_str')))) {
                $errors['content']='请输入合法内容';
            }
            if (!(filter_input(INPUT_POST, 'ursername',FILTER_CALLBACK,array('options'=>'Comment::validate_str')))) {
                $errors['username']='请输入合法用户名';
            }
            $options=array('options'=>array('min_range'=>1,'max_range'=>5));
            if(!(filter_input(INPUT_POST, 'face',FILTER_VALIDATE_INT,$options))){
                $errors['face']='请选择合法头像';
            }
            if (!empty($errors)) {
                $arr=$errors;
                return false;
            }
            $arr=$data;
            $arr['email']=strtolower(trim($arr['email']));
            return true;
        }
        /**
         * 过滤用户输入的特殊字符
         * @param  string $str
         * @return boolean  |string
         */
        public static function validate_str($str )
        {
            if (mb_strlen($str,'UTF8')<1) {
                return false;
            }
            $str = nl2br(htmlspecialchars($str,ENT_QUOTES));
            return $str;
        }
    }
 ?>