from bs4 import BeautifulSoup
import requests
import json

url = 'https://horo.mail.ru/'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

list_result = []

baseDiv = soup.findAll("div", {"class": "cols__column cols__column_small_percent-25 cols__column_medium_percent-25 cols__column_large_percent-25 margin_bottom_30 align_center"})
for sign in baseDiv:
    date = sign.find("span", {"class": "p-imaged-item__date"}).text
    zodiacSign = sign.find("span", {"class": "p-imaged-item__name"}).text
    link = sign.find("a", {"class": "p-imaged-item p-imaged-item_circle p-imaged-item_rune p-imaged-item_shadow_inner"})
    print('все основные теги нашел')
    href = link.get('href')
    url = "https://horo.mail.ru/" + href
    response = requests.get(url)
    if (response.status_code == 200):
        print('ответ 200 получен')
        soup = BeautifulSoup(response.text, 'html.parser')
        prediction = soup.find("div",{"class": "article__item article__item_alignment_left article__item_html"}).text.strip()
        mainLink = soup.findAll("a", {"class": "filter__item"})
# yesterday
        for link in mainLink[:1]:
            yesterdayLink = link.get('href')
            yesterdayUrl = "https://horo.mail.ru/" + yesterdayLink
            response = requests.get(yesterdayUrl)
            if (response.status_code == 200):
                print('ответ 200 получен')
                soup = BeautifulSoup(response.text, 'html.parser')
                yesterdayPrediction = soup.find("div", {"class": "article__item article__item_alignment_left article__item_html"}).text.strip()
            else:
                print('error')
# tomorrow
        for link in mainLink[2:3]:
            yesterdayLink = link.get('href')
            yesterdayUrl = "https://horo.mail.ru/" + yesterdayLink
            response = requests.get(yesterdayUrl)
            if (response.status_code == 200):
                print('ответ 200 получен')
                soup = BeautifulSoup(response.text, 'html.parser')
                tomorrowPrediction = soup.find("div", {"class": "article__item article__item_alignment_left article__item_html"}).text.strip()
            else:
                print('error')
        print('пополняю список')
        list_result.append(
        {
            "date": date,
            "zodiac": zodiacSign,
            "prediction":prediction,
            "yesterday":yesterdayPrediction,
            "tomorrow": tomorrowPrediction

        }
    )
    else:
        print('error')

with open("predictions.json", "a", encoding="utf-8") as file:
    json.dump(list_result, file, indent=4,ensure_ascii=False)