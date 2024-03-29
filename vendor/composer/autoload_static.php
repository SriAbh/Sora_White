<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd386de17587ac77542bd7247b724814d
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
        'A' => 
        array (
            'Acer\\Signup\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
        'Acer\\Signup\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd386de17587ac77542bd7247b724814d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd386de17587ac77542bd7247b724814d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd386de17587ac77542bd7247b724814d::$classMap;

        }, null, ClassLoader::class);
    }
}
