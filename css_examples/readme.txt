A1136 Web Mapping: Cascading Style Sheets - some examples
=========================================================

Cascading Style Sheets - often underused, often misunderstood! An extremely powerful means to control the visual interface of your web pages. It's always easier to show some examples of how things work - so here goes! Also there are Blackboard links to lots of web sites that will help you understand the world of CSS. One in particular is http://www.csszengarden.com/.

In this fileset there are two html files, each showing a different aspect of CSS. Lets start with:

Web1.htm
--------
Web1.htm shows you how style sheets can be applied to different media output types - such as a screen, a printer, a handheld computer - or even a text to speech synthesiser for the visually impaired. CSS therefore allows you to seperate content from style, and to target a style at each of the media output types. Typically only CSS file gets used on most websites - and that style gets propagated to all output types - e.g. printouts appear the same as the screen - but this need not be!

Load up web1.htm and look how it appears on screen. Now to see how it appears in print you can either print the file (not necessary for this exercise) or better still use the print preview page. The result is completely different - why? It is using two CSS files, 'web1_screen.css' and 'web1_print.css'. Now look at the HTML in a text editor (e.g. View Source) and you can see at the top of the page where the declarations are made linking to each of the two seperate CSS files. Load in turn each of the two CSS files into the editor and look at them. Notice how the 'menu' is switched off for printouts - this is achieved through the use of Division DIV tags in the HTML code. 

next look at....

Images.htm
----------
Images.htm is designed to show how you can truly separate content from design. Load the html file up and observe the visual interface - menus appear to have 'rollover images', text is positioned etc. Now look at the source code of the HTML - where are the references for these images? They are not in the HTML - the HTML looks really simple - again split up using DIV tags. The CSS file itself contains references to the images - load up the 'images_screen.css' CSS file to see how this is done. Imagine the advantages of keeping the design seperate from the text content! It makes the HTML code really clear and easy to maintain - it could be easily generated from a database even. Then as for styles, you could have a series of different styles which can be applied to the same content - you could even give your visitor the choice of how to view it! Do have a look at http://www.csszengarden.com/ to see far better examples - although the principle is the same.