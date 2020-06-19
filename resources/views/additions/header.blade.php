<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimum-scale=1.0'
    />
    <title>@yield('title')</title>
    <link rel="icon" type="image/png" href="imgs/logo_white.svg">
    <link rel="stylesheet" href="{{ asset('css/additions/header.css') }}">
    <link rel="stylesheet" href="{{ asset('css/additions/footer.css') }}">
    <link rel="stylesheet" href="{{ asset('css/Rai_master.css') }}">
    <link rel="stylesheet" href="{{ asset('css/3rd_party/hamburger.min.css') }}">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="@yield('css')">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</head>
<body>

<script>
    AOS.init();
</script>
