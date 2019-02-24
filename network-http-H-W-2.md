!!! Если честно то 90% не понял, это правда на сегодняшний день !!!
	!!!	https://habr.com/ru/post/215117/ !!!

Simple homework

1	Play with Chrome Developers Toolkit (DevTools), and “Network” tab
	choose at least 5 websites (any)
	open each of them one by one
	view & analyze list of requests & responses (that your browser made)
		analyze the GET request/response packagies (the homework should include the whole package text including request-line and headers)
		explain each of headers line (what “User-Agent” means? what “Accept” means? what does other means?)

	Expected result

		the list of websites, with request and response (including the status-line & headers) of each of them
		the list of headers (from above requests/responses) with descriptions of each (you need to google & find the purpose of each)

	https://vk.com
		General
			Request URL: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAENJREFUeF7tzbEJACEQRNGBLeAasBCza2lLEGx0CxFGG9hBMDDxRy/72O9FMnIFapGylsu1fgoBdkXfUHLrQgdfrlJN1BdYBjQQm3UAAAAASUVORK5CYII=
			Request Method: GET
			Status Code: 200 OK (from memory cache)
			Referrer Policy: no-referrer-when-downgrade
		Response Headers
			Content-Type: image/png
		Request Headerrs
			Provisional headers are shown

	https://vk.com.ua/
		General
			Request URL: https://vk.com.ua/
			Request Method: GET
			Status Code: 200 
			Remote Address: 185.68.16.192:443
			Referrer Policy: no-referrer-when-downgrade
		Response Headers
			cache-control: max-age=0, no-cache, no-store
			content-encoding: gzip
			content-type: text/html; charset=utf-8
			date: Sat, 16 Feb 2019 20:25:35 GMT
			pragma: no-cache
			server: nginx
			status: 200
			x-page-speed: on
		Request Headers
			:authority: vk.com.ua
			:method: GET
			:path: /
			:scheme: https
			accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
			accept-encoding: gzip, deflate, br
			accept-language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7
			cache-control: max-age=0
			cookie: PHPSESSID=cqg35gesmqjv8qguc2aj7jt0l6; language=ru; currency=UAH; _ga=GA1.3.906512961.1550348434; _gid=GA1.3.2030187376.1550348434; _hjIncludedInSample=1; _gat_UA-56288571-1=1
			upgrade-insecure-requests: 1
			user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36

	https://www.facebook.com
		General
			Request URL: https://5-edge-chat.facebook.com/pull?channel=p_100005873202224&seq=66&partition=-2&clientid=7ce136b1-2f24-4ac4-a5ec-ea6a75c0b1b2&cb=fi6v&idle=139&qp=y&cap=8&iris_enabled=false&pws=fresh&isq=4995&msgs_recv=66&uid=100005873202224&viewer_uid=100005873202224&sticky_token=1104&sticky_pool=rprn0c01_chatproxy-regional
			Request Method: GET
			Status Code: 200 
			Remote Address: 157.240.20.15:443
			Referrer Policy: origin-when-cross-origin
		Response Headers
			access-control-allow-credentials: true
			access-control-allow-origin: https://www.facebook.com
			cache-control: private, no-store, no-cache, must-revalidate
			content-encoding: gzip
			content-length: 54
			content-type: application/json
			date: Sat, 16 Feb 2019 20:13:33 GMT
			pragma: no-cache
			server: EdgeChat
			status: 200
			x-frame-options: DENY
		Request Headers
			Provisional headers are shown
			Origin: https://www.facebook.com
			Referer: https://www.facebook.com/
			User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36
		Querty String Parameters
			channel: p_100005873202224
			seq: 66
			partition: -2
			clientid: 7ce136b1-2f24-4ac4-a5ec-ea6a75c0b1b2
			cb: fi6v
			idle: 139
			qp: y
			cap: 8
			iris_enabled: false
			pws: fresh
			isq: 4995
			msgs_recv: 66
			uid: 100005873202224
			viewer_uid: 100005873202224
			sticky_token: 1104
			sticky_pool: rprn0c01_chatproxy-regional

	https://web.telegram.org
		General
			Request URL: https://web.telegram.org/
			Request Method: GET
			Status Code: 200 OK (from ServiceWorker)
			Referrer Policy: no-referrer-when-downgrade

			Request URL: https://web.telegram.org/service_worker.js
			Request Method: GET
			Status Code: 200 OK
			Remote Address: 149.154.167.99:443
			Referrer Policy: no-referrer-when-downgrade
		Response Headers
			Cache-Control: max-age=3600
			Connection: keep-alive
			Content-Encoding: gzip
			Content-Type: text/html
			Date: Fri, 02 Nov 2018 19:30:57 GMT
			ETag: W/"5a2afc2d-633"
			Expires: Fri, 02 Nov 2018 20:30:57 GMT
			Last-Modified: Fri, 08 Dec 2017 20:55:09 GMT
			Server: nginx/1.12.2
			Strict-Transport-Security: max-age=35768000
			Transfer-Encoding: chunked

			Accept-Ranges: bytes
			Cache-Control: max-age=3600
			Connection: keep-alive
			Content-Length: 16204
			Content-Type: application/javascript
			Date: Sat, 16 Feb 2019 20:51:17 GMT
			ETag: "5c019e0d-3f4c"
			Expires: Sat, 16 Feb 2019 21:51:17 GMT
			Last-Modified: Fri, 30 Nov 2018 20:31:09 GMT
			Server: nginx/1.12.2
			Strict-Transport-Security: max-age=35768000
		Request Headers
			Upgrade-Insecure-Requests: 1
			User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36

			Accept: */*
			Accept-Encoding: gzip, deflate, br
			Accept-Language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7
			Cache-Control: no-cache
			Connection: keep-alive
			Cookie: _ga=GA1.2.2034986619.1533120550
			Host: web.telegram.org
			Pragma: no-cache
			Referer: https://web.telegram.org/service_worker.js
			Service-Worker: script
			User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36


2	What are differences between HTTP version 1.0 and 1.1?
		navigate your browser to websites what you’re frequently use (the company’s website, some social networks, etc)
		Expected result
			list of differences between 1.0 and 1.1
			answer to question - how to pass user-data via GET? via POST? what is the diff?
			few samples of websites (and cases) where POST method is used
				
				Поддержка прокси и поле хоста:

				HTTP 1.1 имеет требуемый заголовок узла по спецификации.

				HTTP 1.0 официально не требует заголовка Host, но не помешает добавить его, и многие приложения (прокси) ожидают увидеть заголовок Host независимо от версии протокола.

				Пример:

				GET / HTTP/1.1
				Host: www.blahblahblahblah.com
				Этот заголовок полезен, поскольку он позволяет маршрутизировать сообщение через прокси-серверы, а также потому, что ваш веб-сервер может различать разные сайты на одном сервере.

				Итак, это означает, что если у вас есть blahblahlbah.com и helohelohelo.com, оба указывают на тот же IP-адрес. Ваш веб-сервер может использовать поле "Хост", чтобы определить, на каком узле нужен клиентский компьютер.

				Стойкие соединения:

				HTTP 1.1 также позволяет иметь постоянные соединения, что означает, что вы можете иметь более одного запроса/ответа на одно и то же HTTP-соединение.

				В HTTP 1.0 вам нужно было открыть новое соединение для каждой пары "запрос/ответ". И после каждого ответа соединение будет закрыто. Это приводит к некоторым большим проблемам с эффективностью из-за TCP Slow Start.

				Метод OPTIONS:


				 
				HTTP/1.1 вводит метод OPTIONS. HTTP-клиент может использовать этот метод для определения возможностей HTTP-сервера. Он в основном используется для совместного использования ресурсов Cross Origin в веб-приложениях.

				Кэширование:

				HTTP 1.0 поддерживал кэширование через заголовок: If-Modified-Since.

				HTTP 1.1 расширяет поддержку кеширования, используя что-то, называемое тегом сущности. Если 2 ресурса одинаковы, то они будут иметь те же теги сущностей.

				HTTP 1.1 также добавляет условные заголовки If-Unmodified-Since, If-Match, If-None-Match.

				Существуют также дополнительные дополнения, касающиеся кэширования, такие как заголовок Cache-Control.

				100 Продолжить статус:

				Появляется новый код возврата в HTTP/1.1 100 Continue. Это делается для того, чтобы клиент не отправлял большой запрос, когда этот клиент даже не уверен, может ли сервер обработать запрос или уполномочен обрабатывать запрос. В этом случае клиент отправляет только заголовки, а сервер будет сообщать клиенту 100 "Продолжить", продолжить работу с телом.

				Гораздо больше:

				Проверка подлинности дайджеста и аутентификация прокси-сервера
				Дополнительные коды статуса
				Кодирование с передачей пакетов
				Заголовок подключения
				Расширенная поддержка сжатия
				Намного больше.

			POST

				Метод POST используется очень часто. Например, вы посетили чей-нибудь блог и вознамерились оставить там комментарий. Вводите какие-нибудь слова в HTML-форму, отстукивая их на клавиатуре, а потом жмёте кнопку отправки. На сервере работает CGI-скрипт, который подхватывает написанное, извлекает из тела запроса и публикует на сайте, а вам возвращается обновлённая страница, где можно увидеть, что из всего этого получилось.

				Кроме того, методом POST нередко загружаются файлы. С помощью браузера, естественно. После того, как вы что-либо закачали, скрипт на сервере выполняет то действие, которое должно быть произведено над полученным файлом. К примеру, если это графический файл, то он добавляется в фотоальбом.

3	Use actions on “Network” tab
		try to use a “search” & “filter” fields/actions
		use ordering by columns, sorting, etc
		Result: describe what feature have you used, and how you can use it in future

			поиск можно использовать для поисков как для определенного файла "7qKddNaDERm.js" так и для
			всех файлов с определенным расширением ".js"

			фильтр можно ставить на отсеевание определенных файлов или расширений "7qKddNaDERm.js" или ".js"

			в будущем может пригодится во время тестирования проэкта

4	Using the Postman
		create a GET request to any website
		analyze the response
		Expected result
			the HTTP request & response (including request-line / status-line & headers)
			description of each header line on response

			google.com
				Date →Sat, 16 Feb 2019 22:11:06 GMT
				Expires →-1
				Cache-Control →private, max-age=0
				Content-Type →text/html; charset=ISO-8859-1
				P3P →CP="This is not a P3P policy! See g.co/p3phelp for more info."
				Content-Encoding →gzip
				Server →gws
				Content-Length →5414
				X-XSS-Protection →1; mode=block
				X-Frame-Options →SAMEORIGIN
				Set-Cookie →1P_JAR=2019-02-16-22; expires=Mon, 18-Mar-2019 22:11:06 GMT; path=/; domain=.google.com
				Set-Cookie →NID=160=YKBiFSQSE8Zqb6O7oN1E6Tte8Iol8l4gaaVaIBMLoCICsd25oV_FP0lw4u9_Gv_7RwTujAESIylNC4klNEaMI29wvk-Kk1xqWXpUgwwm1vQGH_3e2N2s3Efsa6Q9qpX9BvB3kP8zeilVRkSnoiMmpo_cu5ofCOhkcb3dRS6HT2c; expires=Sun, 18-Aug-2019 22:11:06 GMT; path=/; domain=.google.com; HttpOnly

5	Using the Postman
		the same as above task, but you need to create the “HEAD” requests
		what is the different with GET request?
		Expected result
			the HTTP request & response (including request-line / status-line & headers)
			the answer to question about differences between HEAD and GET methods

			google.com
				Date →Sat, 16 Feb 2019 22:16:18 GMT
				Expires →-1
				Cache-Control →private, max-age=0
				Content-Type →text/html; charset=ISO-8859-1
				P3P →CP="This is not a P3P policy! See g.co/p3phelp for more info."
				Content-Encoding →gzip
				Server →gws
				Content-Length →5410
				X-XSS-Protection →1; mode=block
				X-Frame-Options →SAMEORIGIN
				Set-Cookie →1P_JAR=2019-02-16-22; expires=Mon, 18-Mar-2019 22:16:18 GMT; path=/; domain=.google.com
				Set-Cookie →NID=160=fKZOVUeDrbhGVaXuhOiP_Ggh3WSRDjRy-wqnYOrvRWIXgadoa9P8F-_NYbsFnURJTIq6YJKSj84AL3a32DIPjeP9B1i1Ji6mzxve3I98M6CerxvioJirhJhcc7Ut6vP-fQgRH6_mQ9rr4NgQG1LdzVK8meYQFgyF8dcYv0-xEdg; expires=Sun, 18-Aug-2019 22:16:18 GMT; path=/; domain=.google.com; HttpOnly

7	Using the Postman extension
		set it up, if not installed yet
		send 5 any requests (including HEAD, GET & POST) to any website
		Expected result

			4 и 5 задание сделаны с помощь Postman

8 	Find any free hosting that provides FTP access
		google “ftp free hosting”, or “free hosting”, etc
		proceed registration, confirmation & get your ftp access credentials (host/port, login, password)
		using any ftp client, deploy any static files (html, any images, etc)
		provide an url (http link) that navigates to uploaded file
		Expected result
		direct url into uploaded file
	www.1gb.ua
	www.testte.cc.ua