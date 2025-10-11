<?php
$sa_count=24777;
$sa_lineCount=18599;
$sa_totalLineCount=21902;
if(isset($_GET['getLineCount']) || isset($_GET['count'])){
	// Get and update user count.
	
	if(isset($_GET['count']) && $_SERVER['HTTP_HOST']!='localhost'){
		//Update count.php line count in file
		$sa_count++;
		$countFile=file('count.php');
		for($x=0; $x<count($countFile);++$x){
			if(stristr($countFile[$x],'sa_count')){
				$countFile[$x]="\$sa_count=".$sa_count.";\n";	
				break;
			}
		}
		//echo implode('', $countFile);
		file_put_contents('count.php', implode('', $countFile));
	}
	// Get and update line counts from all files.
	if(isset($_GET['getLineCount'])){
		$rootArray=Array("index.php","pixelmancer.css", "count.php","served.js", "submitContactMe.php");

		$count=0;
		$lineCount=0;
		for($x=0; $x<count($rootArray);++$x){
			if(strpos($rootArray[$x], ".php") || strpos($rootArray[$x], ".js") || strpos($rootArray[$x], ".css") ){
				$count++;
				$f=fopen($rootArray[$x], "r");
				while(!feof($f)){
					$line=fgets($f);
					$line=str_replace("\t", "", str_replace(" ", "", $line));
					if($line!=""){
						$lineCount++;
					}
				}
				fclose($f);
			}
		}
		$jsList=scandir("./js");
		for($x=0; $x<count($jsList);++$x){
			if(strpos($jsList[$x], ".php") || strpos($jsList[$x], ".js") || strpos($jsList[$x], ".css") ){
				$count++;
				$f=fopen("js/".$jsList[$x], "r");
				while(!feof($f)){
					$line=fgets($f);
					$line=str_replace("\t", "", str_replace(" ", "", $line));
					if($line!=""){
						$lineCount++;
					}
				}
				fclose($f);
			}
		}
		$jsList=scandir("./js/mapGLSL");
		$writtenCount=$lineCount;
		for($x=0; $x<count($jsList);++$x){
			if( ( strpos($jsList[$x], ".php") || strpos($jsList[$x], ".js") || strpos($jsList[$x], ".css") )){
				$count++;
				$updateWritten=substr($jsList[$x], 0, 4)=="map_";
				echo "<br>".$jsList[$x];
				$f=fopen("js/mapGLSL/".$jsList[$x], "r");
				while(!feof($f)){
					$line=fgets($f);
					$line=str_replace("\t", "", str_replace(" ", "", $line));
					if($line!=""){
						$lineCount++;
						if($updateWritten){
							$writtenCount++;
						}
					}
				}
				fclose($f);
			}
		}
		
		//Update count.php line count in file
		$countFile=file('count.php');
		for($x=0; $x<count($countFile);++$x){
			if(stristr($countFile[$x],'sa_lineCount')){
				$countFile[$x]="\$sa_lineCount=".$writtenCount.";\n";
			}
			if(stristr($countFile[$x],'sa_totalLineCount')){
				$countFile[$x]="\$sa_totalLineCount=".$lineCount.";\n";
				break;
			}
		}
		//echo implode('', $countFile);
		file_put_contents('count.php', implode('', $countFile));
		
		echo "Line count in ";
		echo $count;
		echo " files - <br>";
		echo $lineCount;
		echo "<br> Hand typed - <br>";
		echo $writtenCount;
		echo "<br><br>File updated.";
	}
}else{
	echo "<b><span style='letter-spacing:4px;font-size:115%;'>[: Pixelmancer :]</span></b><br>\n";
	echo "<i>- http://www.Pxlmancer.com -</i><br><br>\n";
	echo "Has been visited by <b>".$sa_count."</b> people.<br>\n";
	echo "Written with <b>".$sa_lineCount."</b> lines of scripting in javascript, jquery, php, html, and css.";
}
?>
