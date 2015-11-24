<?php 
    class testController{
        function show(){
            $testModel=new testModel();
            $data=$testModel->get();
            $testView=new testView();
            $testView->display($data);
        }
    }
 ?>