<?php

class FileUploader extends FileManager {
    private $maxSize = 1024;
    private $linearCongruentialGenerator;
    private $linearCongruentialGeneratorOffset;

    private static $instance = null;

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new FileUploader();
        }

        return self::$instance;
    }

    private function __construct() {}

    public function upload($file) {
        $newFileName = $this->generateNewName($file['name']);

        if($file['size'] > (1024 * $this->maxSize)) {
            return false;
        }
        
        move_uploaded_file($file['tmp_name'], $this->getLocalPath() . $newFileName);

        return true;
    }

    private function generateNewName($fileName) {
        $newName = $fileName;
        $newName = strtolower($newName);
        $newName = preg_replace('/\s+/', '_', $newName);

        if ($this->linearCongruentialGenerator instanceof LinearCongruentialGenerator) {
            $newName = $this->linearCongruentialGenerator->generate($this->linearCongruentialGeneratorOffset) . '_' . $newName;
        }

        return $newName;
    }

    public function setGeneratorValues($gap, $first, $offset) {
        $this->linearCongruentialGenerator = new LinearCongruentialGenerator();
        $this->linearCongruentialGeneratorOffset = $offset;

        $this->linearCongruentialGenerator->setGap($gap);
        $this->linearCongruentialGenerator->setFirst($first);
    }
    
    public function setMaxSize($maxSize) {
        $this->maxSize = $maxSize;
    }

}