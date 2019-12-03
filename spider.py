import urllib.request
import re
import sys

#网址
url = "file:///" + sys.path[0] + r'/考试详情%20-%20易班优课.html'
 
#请求
request = urllib.request.Request(url)
 
#爬取结果
response = urllib.request.urlopen(request)
 
data = response.read()
 
#设置解码方式
data = data.decode('utf-8')
 
# #打印结果
# print(data)
 
# #打印爬取网页的各类信息
 
# print(type(response))
# print(response.geturl())
# print(response.info())
# print(response.getcode())

# res_tr = r'<p class="q-cnt crt">.*?<span>\[.*?分\]</span>(.*?)</p>'
res_tr=r'<p class="q-cnt crt">(.*?)</p>'
mm_tr = re.findall(res_tr,data,re.S|re.M)
def fun1(s):return s if s.find("span")==-1 else None
m_tr = list(filter(fun1, mm_tr))
i = 0
num = 0
txtres = open("res.txt","w",encoding='utf-8')
for i in range(len(m_tr)):
	m_tr[i] = m_tr[i].replace("<br/>","")
	m_tr[i] = m_tr[i].replace("\n","")
	m_tr[i] = m_tr[i].replace(" ","")
	m_tr[i] = m_tr[i].replace(" ","")
	# print(m_tr[i])
	txtwb = open("1.txt")
	FoundFlag = False
	LineTemp = txtwb.readline()
	while LineTemp:
		if LineTemp.find(m_tr[i]) != -1 :
			FoundFlag = True
			LineTemp = txtwb.readline()
			list=[]
			while LineTemp.find("正确答案") == -1:
				list.append(LineTemp)
				# txtres.write(LineTemp)
				LineTemp = txtwb.readline()
			num = num + 1
			# print(ord(LineTemp[5])-ord('A'))
			# txtres.write(str(num) + "、" + LineTemp[5:] + "\n")
			list[ord(LineTemp[5])-ord('A')]=list[ord(LineTemp[5])-ord('A')].replace("\n","")
			txtres.write("\""+list[ord(LineTemp[5])-ord('A')][2:]+"\",")
			break
		else:
			LineTemp = txtwb.readline()
	if FoundFlag == False:
		num = num + 1
		# txtres.write(str(num) + "、X" + " " + m_tr[i] + "\n\n")
		txtres.write("\""+str(num) + "、X" + " " + m_tr[i] +"\",")
	txtwb.close()
txtres.close()