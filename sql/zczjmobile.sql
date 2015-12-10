--use zczj_test
--go

---- select * from ZC_project
---- 前10条数据
---- select Top 10 * from ZC_project

----返回指定字段
---- select ProjectID,ProjectName from ZC_project

----排序 order by 
---- desc-> descending order;(倒顺);asc=ascending order(升顺[默认])
----select * from ZC_project order by ProjectID desc

----select * from ZC_project order by ProjectName desc
----两个排序条件
----select * from ZC_project order by PlatID desc,ProjectID
---- 2表示第2个字段
---- select * from ZC_project order by 2 desc

---- isnull(key,value) 方法
----select ProjectID,PlatID,ISNULL(TargetName,'') from ZC_project
----Topic 5
---- select ProjectID,PlatID,ISNULL(TargetName,'') as TargetName from ZC_project
---- select ProjectName as Name, ' 产品ID ' + convert(varchar,ProjectID) as projectID from ZC_project
----Topic 6 round(key,tag) tag为1 保留一位， tag为0时：四舍五入
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
----select * from ZC_project where ProjectName='老苏模仿见怪莫怪'

---- Topic 8 like value  (%value%) %:表是有或没有的通配符 _:表一个字符的有或没有的通配符
----select * from ZC_project
----select * from ZC_project where ProjectName like'老苏模仿见怪莫怪'
----select * from ZC_project where ProjectName like'%老苏%'
----select * from ZC_project where ProjectName like'老_%'

---- Topic 9 in(prame arguerments) 包括的参数  not in 反之
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
  
--  --Topic 12 count 计录行数 distinct，列出结果且不重复
--  --select COUNT(ProjectID) from ZC_project
  
--  --select distinct(PlatID) from ZC_project
--  --select COUNT(distinct(PlatID)) from ZC_project
  
--  --Topic 13 avg(value) 平均值 min 最小，max 最大，sum总和
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