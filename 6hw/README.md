# Weather Dashboard

## Description

I was asked to build a Weather application using the [openweathermap.org](openweathermap.org) API.
The landing page is blank, since determining the user's current location is outside the scope of this project (and my abilities).
Once the user enters a search, either by clicking the button or hitting the enter key after typing in the labeled input field, an AJAX call is used to retrieve a JSON containing the relevant information from OpenWeather's server.
If the call fails, the user is alerted.
If it succeeds, everal functions create html elements to display selected information to the user.
A button is created for each search, making it easy for the user to keep tabs on multiple cities.
The most recent search and list of cities searches are saved to local storage, allowing a returning user to pick up where they left off.
Finally, a clear button allows the user to reset the app if they find themselves with too many buttons or would simply like to remove the data from local storage.
While it was not technically specified that the application be responsive, in the interest of best practice a flexible dashboard template provided at [https://getbootstrap.com/docs/4.5/examples/](https://getbootstrap.com/docs/4.5/examples/) was used as a base for the landing page, and the application's core functionality can be accessed on any device.
Finally, while I was unable to keep the key in a private repository, it is at least retrieved from a submodule in the application's parent directory as a gesture towards security.

## Installation//Usage

The site can be accessed at [https://mavn2.github.io/classrep/6hw/](https://mavn2.github.io/classrep/6hw).
The application code is stored in the 6hw folder in the classrep repository on my GitHub page, at [https://github.com/mavn2/classrep/tree/master/6hw](https://github.com/mavn2/classrep/tree/master/6hw).
The additional repository used for storage is located at [https://github.com/mavn2/weatherkey](https://github.com/mavn2/weatherkey).

Search functionality:
![Gif showing several searches entered](https://media.giphy.com/media/U7saY538QnbyU6FHDi/giphy.gif)

Local storage functionality:
![Gif showing cities search from buttons, and re-rendered on refresh despite search error](https://media.giphy.com/media/YMv6Tr9s3Imf1usyQX/giphy.gif)

Clear button:
[Gif showing clear button functionality](https://media.giphy.com/media/YMv6Tr9s3Imf1usyQX/giphy.gif)

## Tests

The description and images above should serve as a guide to using the application, which is fairly self-explanatory. Users are encouraged to make use of its full functionality:
search for a number of cities, and decide where the weather looks best for travel.
Search for something that isn't a city!
Use the buttons that will appear with each distinct search to compare search results.
Close and reopen the page-your last search will be queried again, letting you keep up with the current weather and forecast.
Clear your history and buttons, then start again.

## Credits

Thanks to my teacher, TAs, tutor, and peers at the UW Full Stack Development Bootcamp.
Thanks in particular to my classmate [https://github.com/PratyushaRaghupatruni](https://github.com/PratyushaRaghupatruni) for pointing me to the OpenWeather icon documentation and pushing me towards more concise jQuery syntax.
Once more, thanks to the jQuery Foundation for their API and excellent documentation, accessible at [https://jquery.com/](https://jquery.com/).
Thanks again to OpenWeather for their API and associated documents, accessible at [https://openweathermap.org/api](https://openweathermap.org/api), as well as Bootstrap [https://getbootstrap.com/](https://getbootstrap.com/) for their CSS library.
Finally, thanks to the many users who discussed the question at [https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript](https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript). Many of the comments were helpful, but the function presented by 'Pitu' was a perfect fit for this application. Credit to them for that code, which appears in mine with (very) light modifications.

## License

MIT License

Copyright (c) [2020] [Max Nicolai IV]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
