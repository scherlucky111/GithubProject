<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Simple HTML5 Form</title>
    <style type="text/css">
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        form {
            margin-bottom: 30px;
        }
        h2 {
            color: #333;
            font-size: 1.5em;
        }
        input, textarea {
            width: 100%;
            height: 40px;
            padding: 10px;
            border: 1px solid #ccc;
            margin-bottom: 20px;
            outline: none;
            font-size: 1.2em;
        }
        button {
            background-color: #3b8a75;
            color: white;
            border-radius: 5px;
            width: 100%;
            height: 40px;
            padding: 10px;
            margin-bottom: 20px;
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <form action="https://example.com/process" method="post">
        <h2>Enter Your Name:</h2>
        <input type="text" name="name" placeholder="Please enter your name...">
        
        <h2>Enter Your Email Address:</h2>
        <input type="email" name="email" placeholder="Please enter your email...">

        <button type="submit">Submit</button>
    </form>

    <!-- Add some CSS for the form -->
    <style type="text/css">
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
            margin-top: 15px;
            color: #333;
        }
        
        .container {
            width: 80%;
            margin: auto;
            border: 1px solid #ccc;
            background-color: white;
        }

        input, textarea {
            width: 100%;
            padding: 15px;
            font-size: 1.2em;
            border-radius: 5px;
        }
        
        button {
            background-color: #3b8a75;
            color: white;
            border-radius: 5px;
            width: 100%;
            height: 40px;
            padding: 10px;
            font-size: 1.2em;
        }
    </style>
</body>
</html>
