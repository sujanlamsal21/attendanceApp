<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <title>Attendance App</title>
    </head>
    <body class="antialiased">
        <div id="root"></div>
    </body>
    <script src="{{ asset('js/app.js') }}"></script>
</html>
