--use zczj_test
--go

---- select * from ZC_project
---- ǰ10������
---- select Top 10 * from ZC_project

----����ָ���ֶ�
---- select ProjectID,ProjectName from ZC_project

----���� order by 
---- desc-> descending order;(��˳);asc=ascending order(��˳[Ĭ��])
----select * from ZC_project order by ProjectID desc

----select * from ZC_project order by ProjectName desc
----������������
----select * from ZC_project order by PlatID desc,ProjectID
---- 2��ʾ��2���ֶ�
---- select * from ZC_project order by 2 desc

---- isnull(key,value) ����
----select ProjectID,PlatID,ISNULL(TargetName,'') from ZC_project
----Topic 5
---- select ProjectID,PlatID,ISNULL(TargetName,'') as TargetName from ZC_project
---- select ProjectName as Name, ' ��ƷID ' + convert(varchar,ProjectID) as projectID from ZC_project
----Topic 6 round(key,tag) tagΪ1 ����һλ�� tagΪ0ʱ����������
----select ProjectID,PlatID from ZC_project
----select ProjectID
----, PlatID*40*52 as AnnualSalary
----,ROUND(PlatID*40*52,1) as AnnualSalay
----,ROUND(PlatID*40*52,0) as AnnualSalay from ZC_project

----Topic 7 where and or 
----select * from ZC_project where PlatID = 76
----select * from ZC_project where ProjectID>1017
----select * from ZC_project
----select PlatID,ProjectID,PostDate,ProjectName from ZC_project where PlatID=76 and ProjectID > 1014 and PostDate between '2015-10-21' and '2015-10-28'
----select * from ZC_project where ProjectName='����ģ�¼���Ī��'

---- Topic 8 like value  (%value%) %:�����л�û�е�ͨ��� _:��һ���ַ����л�û�е�ͨ���
----select * from ZC_project
----select * from ZC_project where ProjectName like'����ģ�¼���Ī��'
----select * from ZC_project where ProjectName like'%����%'
----select * from ZC_project where ProjectName like'��_%'

---- Topic 9 in(prame arguerments) �����Ĳ���  not in ��֮
----select * from ZC_project where PlatID in(76,104)
----select * from ZC_project where PlatID not in(76)

----TOpic 10 is null 
--	--select * from ZC_project
--  --select * from ZC_project where TargetName is null
--  --select * from ZC_project where TargetName is not null
  
--  --Topic 11 
--  --select * from ZC_project where PlatID=76 or ProjectID=1014
--  --select * from ZC_project where PlatID=76 and ProjectID=1014
--  --select * from ZC_project where (PlatID=76 or ProjectID=1014) and ProjectName='ssss'
  
--  --Topic 12 count ��¼���� distinct���г�����Ҳ��ظ�
--  --select COUNT(ProjectID) from ZC_project
  
--  --select distinct(PlatID) from ZC_project
--  --select COUNT(distinct(PlatID)) from ZC_project
  
--  --Topic 13 avg(value) ƽ��ֵ min ��С��max ���sum�ܺ�
--  select AVG(ProjectID) as AvgID from ZC_project
--  select AVG(ProjectID) as AvgID
--  ,MIN(projectID) as MinID
--  ,MAX(projectID) as MaxID
--  ,SUM(projectID) as SumID from ZC_project

----select PlatID,MAX(projectID) as maxProjectID from ZC_project
---- Error:Message:Column 'ZC_project.PlatID' is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause.
--select PlatID,MAX(projectID) as maxProjectID 
--from ZC_project
----where PlatID is not null
--group by PlatID
--order by PlatID desc