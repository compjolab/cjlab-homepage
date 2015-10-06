---
title: "Deep and interesting datasets for computational journalists: a quick list"
author: Dan Nguyen
description: In case you missed the Sept. 30 CJ Lab info session, a summary and some links to get you acquainted.
date: 2015-09-30
---

Thank you to everyone who attended [today's informational session](http://us7.campaign-archive1.com/?u=60a5181e3d9c08e1e0f401dc0&id=1d23daf12f&e=a077356aa8) about the Stanford Computational Journalism Lab. If you weren't able to come by, feel free to sign up for our [mailing list](http://cjlab.stanford.edu/contact#newsletter-section), and/or get in contact with us [via email and social media](http://cjlab.stanford.edu/contact/).

During the presentation, I had a slide listing all the datasets I could think of in 5 minutes that were public, important, "big" (100,000 records or more), and "easy" to get -- at least compared to the days when you had to [send a government agency a shrink-wrapped hard drive](http://chriswhong.com/open-data/foil_nyc_taxi/):

![image](/files/images/news/slide-datasets.png){:.bordered}


Not all the datasets are literally just one-click-to-download -- you may have to [re-read the wget manual](https://gist.github.com/dannguyen/26e5922614dc22053745) or write a [quick scraper](https://github.com/compjour/search-script-scrape) -- but they are freely accessible to anyone with an Internet connection. Here's the list of datasets with URLs:


- [Daily pollution readings for every EPA sensor](http://www3.epa.gov/airdata/ad_data.html)
- [Florida inmate population](http://www.dc.state.fl.us/pub/obis_request.html)
- [Texas inmate population](http://www.tdcj.state.tx.us/documents/High_Value_Data_Sets.xlsx)
- [The time of each U.S. major air carrier flight since 1985 and how late it was](http://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236&DB_Short_Name=On-Time)
- [Every fatality from a traffic accident since 1975](http://www.nhtsa.gov/FARS)
- [Every reported vehicle defect, investigation, and recall in the U.S.](http://www-odi.nhtsa.dot.gov/downloads/)
- [Every campaign donation to a U.S. federal candidate](http://www.fec.gov/disclosure.shtml)
- [Every NYC taxi ride in the past 5 years including how much it cost + tip](http://www.nyc.gov/html/tlc/html/about/trip_record_data.shtml)
- [SFPD police reported incidents](https://data.sfgov.org/Public-Safety/SFPD-Incidents-from-1-January-2003/tmnf-yvry)
- [Dallas police reported incidents](https://www.dallasopendata.com/Police/Dallas-Police-Public-Data-RMS-Incidents/tbnj-w5hb)
- [Los Angeles police reported incidents](https://data.lacity.org/A-Safe-City/LAPD-Crime-and-Collision-Raw-Data-2014/eta5-h8qx?)
- [Chicago police reported incidents](https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present/ijzp-q8t2)
- [Medicare payments for every doctor for every procedure they performed and billed for](https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/medicare-provider-charge-data/physician-and-other-supplier.html)
- [All registered Congressional lobbyists and what issues they lobbied on](http://www.senate.gov/legislative/Public_Disclosure/database_download.htm)
- [Every one who has visited the White House since December 2009](https://www.whitehouse.gov/briefing-room/disclosures/visitor-records)
- [The race, age, and sex of everyone the NYPD stopped on the street and frisked](http://www.nyc.gov/html/nypd/html/analysis_and_planning/stop_question_and_frisk_report.shtml)
- [Every workplace fatality [that resulted in an investigation] and workplace inspection](http://ogesdw.dol.gov/views/data_summary.php)
- [Every report of an injury or fatality believed to be related to a FDA-regulated drug](http://www.fda.gov/Drugs/GuidanceComplianceRegulatoryInformation/Surveillance/AdverseDrugEffects/ucm082193.htm)
- [California schools SAT, ACT, AP scores](http://www.cde.ca.gov/ds/sp/ai/)
- [California schools standardized test scores](http://star.cde.ca.gov/starresearchfiles.asp)
- [California schools demographics](http://www.cde.ca.gov/ds/sd/)
- [California schools vaccination rates](https://www.cdph.ca.gov/programs/immunize/Pages/ImmunizationLevels.aspx)
- [Every thing and person paid for by Congressional office funds](http://sunlightfoundation.com/tools/expenditures/)

Those are just what I could fit into the slide. There are many more, of course:

- [All U.S. registered clinical trials](https://www.clinicaltrials.gov/ct2/resources/download)
- [California state payroll](http://publicpay.ca.gov/)
- [Florida state payroll](http://dmssalaries.herokuapp.com/salaries)
- [New York state payroll](http://checkbooknyc.com/data-feeds)
- New Jersey state payroll: [centralized system](https://data.nj.gov/Governor-s-Transparency-Data/YourMoney-Agency-Payroll/iqwc-r2w7) and [non-centralized system](https://data.nj.gov/Governor-s-Transparency-Data/YourMoney-Authority-Payroll/kiki-imre)
- [New York City restaurant inspections](https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/43nn-pn8j)
- [Nationwide crime and stop-and-search reports for the UK](https://data.police.uk/data/)
- [Congressional bills and roll call votes](https://www.govtrack.us/developers/data)
- [Earthquake events detected by the U.S. Geological Survey network](http://earthquake.usgs.gov/earthquakes/search/)
- [Surplus military equipment distributed from the Pentagon to civilian law enforcement](https://github.com/datahoarder/leso_1033)
- [311 Requests for San Francisco](https://data.sfgov.org/City-Infrastructure/Case-Data-from-San-Francisco-311-SF311-/vw6y-z8j6)
- [Recalls and civil/criminal penalties via the U.S. Consumer Product Safety Commission](http://www.cpsc.gov/en/Newsroom/Downloadable-Data/)
- [Payments made by health care companies to doctors](https://www.cms.gov/openpayments/)
- [New York subway turnstile data](http://web.mta.info/developers/turnstile.html)
- A variety of climate data from the [National Oceanic and Atmospheric Administration](http://www.ncdc.noaa.gov/data-access), in API and archive form.
- [A survey containing 10% of airfare tickets for major U.S. airlines](http://www.transtats.bts.gov/tables.asp?DB_ID=125&DB_Name=Airline%20Origin%20and%20Destination%20Survey%20%28DB1B%29&DB_Short_Name=).
- [Student completion and earnings for all undergraduate degree-granting U.S. colleges from 1996 to 2015](https://collegescorecard.ed.gov/data/)
- [Baby names by year, sex, and state, according to the Social Security Administration](http://www.ssa.gov/oact/babynames/limits.html)
- [All U.S. federal contracts, grants, and loans](https://www.usaspending.gov/DownloadCenter/Pages/DataDownload.aspx)
- [NYPD motor vehicle collisions](https://nycopendata.socrata.com/Public-Safety/NYPD-Motor-Vehicle-Collisions/h9gi-nx95?)
- [Seattle Real Time Fire 911 Calls](https://data.seattle.gov/Public-Safety/Seattle-Real-Time-Fire-911-Calls/kzjm-xkqj)
- [NIST's national database of software security flaws](https://nvd.nist.gov/download.cfm)
- [Reported incidents of civilian aircraft hitting birds and other animals](http://wildlife.faa.gov/)

Many cities and states are (with, in my opinion, surprising enthusiasm) uploading their machine-readable data to Socrata, which provides easy CSV and JSON data exports; here's [San Francisco](https://data.sfgov.org/) and [New York City](https://nycopendata.socrata.com/data). The [U.S. City Open Data Census](http://us-city.census.okfn.org/) and the [Police Open Data Census](https://codeforamerica.github.io/PoliceOpenDataCensus/) -- via Code For America, Sunlight Foundation, and Open Knowledge Foundation -- are two particularly great places to find interesting civic data.

<a href="http://us-city.census.okfn.org/">
<img class="bordered img-responsive" src="/files/images/news/okfn-us-city-census.png" alt="US City Open Data Census screenshot">
</a>

<strong>Note:</strong> So far, I've only included only machine-readable data that comes directly from purported official sources. This leaves out independently curated data that pertains to public affairs, such as the [Supreme Court Database](http://supremecourtdatabase.org/). For federal lawmaking and lawmaker data, the sheer expanse of Sunlight Foundation's [projects page](https://sunlightfoundation.com/tools/) and [GovTrack's bulk data](https://www.govtrack.us/developers) can't be praised enough; their data-parsing efforts have created comprehensive databases out of text intended for dead trees.


#### Natural language and data mining

_This is a little off-topic, but people usually also want datasets that can be used for machine learning and natural language. That's not my particular expertise but I'll list a few examples that I know about._

There are plenty of private datasets for data mining: [Yelp's Academic Dataset](https://www.yelp.com/academic_dataset) is probably one of the easiest one-click datasets for interesting text tied to categories and sentiment (i.e. star reviews). And the Internet Movie Database [has plaintext dumps of _some_ of their data (though not reviews)](http://www.imdb.com/interfaces). And I've always wanted to more closely examine the types of questions asked (and incorrectly answered) on Jeopardy; [here's a scrape of j-archive.com](https://www.reddit.com/r/datasets/comments/1uyd0t/200000_jeopardy_questions_in_a_json_file). Visit [r/datasets](https://www.reddit.com/r/datasets/) for a variety of independently collected datasets, including the [corpus of 1.7 billion comments](https://www.reddit.com/r/datasets/comments/3bxlg7/i_have_every_publicly_available_reddit_comment/).

The [Stanford Network Analysis Project](http://snap.stanford.edu/) has a large number of datasets geared towards network analysis, including the [Enron email dump](https://snap.stanford.edu/data/email-Enron.html). If you're interested in a more recent, albeit one-man-network, check out Jeb Bush's [emails](http://jebemails.com/email/search), which he released in response to requests as he began his presidential run.

There are plenty of public text sources besides disclosed emails. But many require an intermediate level of programming ability and a non-trivial amount of patience to collect. If you can muster that, transcripts and rulings (now [with diffs!](https://twitter.com/waldojaquith/status/651115341985091584)) aren't terribly difficult to scrape from the [U.S. Supreme Court website](http://www.supremecourt.gov/). Press releases from lawmakers and agencies are another plentiful source. My colleague [Justin Grimmer](http://www.justingrimmer.org/research.html) in the Political Science department makes it a habit to practice reproducible research: here's a [Github repo of the U.S. Senate press releases he collected](https://github.com/lintool/GrimmerSenatePressReleases), and here's his resulting paper: [A Bayesian Hierarchical Topic Model for Political Texts: Measuring Expressed Agendas in Senate Press Releases. (2010)](http://web.stanford.edu/~jgrimmer/ExpAgendaFinal.pdf).

Sunlight has [an API for Congressional speeches](http://capitolwords.org/api/1/). And the [Federal Register has an API](https://www.federalregister.gov/learn/developers) for the text in its rule-making and notices. And [Regulations.gov has an API](http://regulationsgov.github.io/developers/console/) to track not only all of the pending federal regulations but all of the public comments submitted -- not sure why I don't see much (proclaimed) use of it given all the very timely information it potentially contains.


--------

This is barely scratching the surface of available public data -- I didn't even mention the [federal data.gov portal](http://www.data.gov/) or the [U.S. Census data](http://www.census.gov/) -- but I highlight these datasets because they have plenty of rows while being relatively self-contained with (usually) decent, if not fun-to-read documentation.

(And one more example, just because it's too big to _not_ mention: [Amazon's AWS Public Data Sets page](https://aws.amazon.com/datasets/) is an overwhelming collection of massive and free data sets.)


### Prepare to research

I don't claim that these datasets are easy to _analyze_, or that they are as complete as they purport to be. In fact, prepare to be frequently frustrated when trying to search for even the most obvious insights. 

For example, a simple aggregate count of the [White House visitor records](https://www.whitehouse.gov/briefing-room/disclosures/visitor-records) on the `visitee_namelast` and `visitee_namefirst` fields -- i.e. the name of the White House official being visited -- would seem to yield clues about who is "important" at the White House -- unless visitors are listed as visiting an [official's scheduling assistant](http://www.politico.com/news/stories/0411/53072_Page3.html). Or if [the most powerful White House officials have their meetings outside of the White House, as the New York Times reported](http://www.nytimes.com/2010/06/25/us/politics/25caribou.html):

> “They’re here all the time — all day,” Andre Williams, a manager at Caribou Coffee, said of his White House customers. (He can spot White House officials by the security badges around their necks, or the Secret Service agents lurking nearby.)
>
> “A lot of them like lattes — that or a ‘depth charge,’ a coffee with a shot of espresso,” Mr. Williams said. “The caffeine rush — they need it.”
>
> Some administration officials and lobbyists say that meeting away from the White House allows officials to get some air without making visitors go through the cumbersome White House security process. Others, however, acknowledge that one motivation is the desire to avoid lobbyists’ names showing up too often on the White House logs.

Despite these inherent problems of the dataset, enterprising news organizations can find interesting bits when they know how to focus their search, such as [Politico's report on secret visits by _The Daily Show's_ Jon Stewart](http://www.politico.com/agenda/story/2015/07/jon-stewarts-secret-white-house-visits-000178?hp=t3_r).

As we said during the presentation, computational journalism requires not just technical skill, but the ability to conduct in-depth research and investigation of the institutions and the processes that produce these datasets. However, don't let that intimidate you -- even just knowing the existence of these datasets might be enough to inspire project ideas.

If you find something interesting, [we'd love to hear from you](/contact). And if studying and practicing computational journalism at Stanford interests you, take a look at the [courses we offer in the winter and spring](/initiatives/#courses-section).


