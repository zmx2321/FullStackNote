<?php
    /**
     * 自定义异常类
     */
    class myException extends Exception {
        // 可以自己定义异常处理流程
        public function getAllInfo () {
            return "ss";
        }
    }

    try {
        if (1 == 1) {
            throw new myException("自定义异常", 123);
        }

        echo "success";
    } catch (myException $e) {
        echo $e -> getAllInfo();
    } catch (Exception $e) {
        echo $e;
    }