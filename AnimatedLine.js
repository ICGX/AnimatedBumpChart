define(["jquery", "./d3.v3.min", "css!./AnimatedLine.css"],function ($, cssContent) {'use strict';
	$("<style>").html(cssContent).appendTo("head");
	
	function createBtn(cmd, text) {
		return '<button class="qirby-button" style="font-size:13px;" data-cmd="' + cmd + '">' + text + '</button>';
	}
	
	
	return {
			initialProperties: {
			version: 1.0,
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInterColumnSortOrder : [1,0],
				qInitialDataFetch: [{
					qWidth: 3,
					qHeight: 1000
				}]
			}
		},
		snapshot: {
			canTakeSnapshot: true
		},
	
	
		paint: function ($element, layout) {
			//add your rendering code here
//			$element.html( "AnimatedLine" );

var html = '';

			html += '<div class="qirby-buttongroup">';
			html += createBtn("animateChart", "Animate");
				
$element.html(html);


var data = {
    "leagueCaption": "France Ligue 1", 
    "standing": [
        {
            "teamName": "Paris SG",
            "color": "#0162A6", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 10
                }, 
                {
                    "matchday": 2, 
                    "position": 3
                }, 
                {
                    "matchday": 3, 
                    "position": 6
                }, 
                {
                    "matchday": 4, 
                    "position": 2
                }, 
                {
                    "matchday": 5, 
                    "position": 5
                }, 
                {
                    "matchday": 6, 
                    "position": 5
                }, 
                {
                    "matchday": 7, 
                    "position": 4
                }, 
                {
                    "matchday": 8, 
                    "position": 4
                }, 
                {
                    "matchday": 9, 
                    "position": 3
                }, 
                {
                    "matchday": 10, 
                    "position": 2
                }, 
                {
                    "matchday": 11, 
                    "position": 2
                }, 
                {
                    "matchday": 12, 
                    "position": 2
                }, 
                {
                    "matchday": 13, 
                    "position": 2
                }, 
                {
                    "matchday": 14, 
                    "position": 2
                }, 
                {
                    "matchday": 15, 
                    "position": 2
                }, 
                {
                    "matchday": 16, 
                    "position": 2
                }, 
                {
                    "matchday": 17, 
                    "position": 2
                }, 
                {
                    "matchday": 18, 
                    "position": 2
                }, 
                {
                    "matchday": 19, 
                    "position": 3
                }, 
                {
                    "matchday": 20, 
                    "position": 4
                }, 
                {
                    "matchday": 21, 
                    "position": 3
                }, 
                {
                    "matchday": 22, 
                    "position": 3
                }, 
                {
                    "matchday": 23, 
                    "position": 3
                }, 
                {
                    "matchday": 24, 
                    "position": 3
                }, 
                {
                    "matchday": 25, 
                    "position": 3
                }, 
                {
                    "matchday": 26, 
                    "position": 2
                }, 
                {
                    "matchday": 27, 
                    "position": 2
                }, 
                {
                    "matchday": 28, 
                    "position": 2
                }, 
                {
                    "matchday": 29, 
                    "position": 2
                }, 
                {
                    "matchday": 30, 
                    "position": 1
                }, 
                {
                    "matchday": 31, 
                    "position": 1
                }, 
                {
                    "matchday": 32, 
                    "position": 1
                }, 
                {
                    "matchday": 33, 
                    "position": 1
                }, 
                {
                    "matchday": 34, 
                    "position": 1
                }, 
                {
                    "matchday": 35, 
                    "position": 1
                }, 
                {
                    "matchday": 36, 
                    "position": 1
                }, 
                {
                    "matchday": 37, 
                    "position": 1
                }, 
                {
                    "matchday": 38, 
                    "position": 1
                }
            ]
        }, 
        {
            "teamName": "Bastia",
            "color": "#014689", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 8
                }, 
                {
                    "matchday": 2, 
                    "position": 15
                }, 
                {
                    "matchday": 3, 
                    "position": 9
                }, 
                {
                    "matchday": 4, 
                    "position": 13
                }, 
                {
                    "matchday": 5, 
                    "position": 14
                }, 
                {
                    "matchday": 6, 
                    "position": 18
                }, 
                {
                    "matchday": 7, 
                    "position": 16
                }, 
                {
                    "matchday": 8, 
                    "position": 16
                }, 
                {
                    "matchday": 9, 
                    "position": 19
                }, 
                {
                    "matchday": 10, 
                    "position": 16
                }, 
                {
                    "matchday": 11, 
                    "position": 18
                }, 
                {
                    "matchday": 12, 
                    "position": 19
                }, 
                {
                    "matchday": 13, 
                    "position": 15
                }, 
                {
                    "matchday": 14, 
                    "position": 15
                }, 
                {
                    "matchday": 15, 
                    "position": 19
                }, 
                {
                    "matchday": 16, 
                    "position": 20
                }, 
                {
                    "matchday": 17, 
                    "position": 20
                }, 
                {
                    "matchday": 18, 
                    "position": 18
                }, 
                {
                    "matchday": 19, 
                    "position": 19
                }, 
                {
                    "matchday": 20, 
                    "position": 14
                }, 
                {
                    "matchday": 21, 
                    "position": 15
                }, 
                {
                    "matchday": 22, 
                    "position": 15
                }, 
                {
                    "matchday": 23, 
                    "position": 16
                }, 
                {
                    "matchday": 24, 
                    "position": 15
                }, 
                {
                    "matchday": 25, 
                    "position": 13
                }, 
                {
                    "matchday": 26, 
                    "position": 10
                }, 
                {
                    "matchday": 27, 
                    "position": 14
                }, 
                {
                    "matchday": 28, 
                    "position": 10
                }, 
                {
                    "matchday": 29, 
                    "position": 12
                }, 
                {
                    "matchday": 30, 
                    "position": 13
                }, 
                {
                    "matchday": 31, 
                    "position": 14
                }, 
                {
                    "matchday": 32, 
                    "position": 14
                }, 
                {
                    "matchday": 33, 
                    "position": 16
                }, 
                {
                    "matchday": 34, 
                    "position": 13
                }, 
                {
                    "matchday": 35, 
                    "position": 12
                }, 
                {
                    "matchday": 36, 
                    "position": 10
                }, 
                {
                    "matchday": 37, 
                    "position": 11
                }, 
                {
                    "matchday": 38, 
                    "position": 12
                }
            ]
        }, 
        {
            "teamName": "Bordeaux",
            "color": "#041C42", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 6
                }, 
                {
                    "matchday": 2, 
                    "position": 1
                }, 
                {
                    "matchday": 3, 
                    "position": 1
                }, 
                {
                    "matchday": 4, 
                    "position": 1
                }, 
                {
                    "matchday": 5, 
                    "position": 3
                }, 
                {
                    "matchday": 6, 
                    "position": 2
                }, 
                {
                    "matchday": 7, 
                    "position": 2
                }, 
                {
                    "matchday": 8, 
                    "position": 2
                }, 
                {
                    "matchday": 9, 
                    "position": 2
                }, 
                {
                    "matchday": 10, 
                    "position": 3
                }, 
                {
                    "matchday": 11, 
                    "position": 6
                }, 
                {
                    "matchday": 12, 
                    "position": 4
                }, 
                {
                    "matchday": 13, 
                    "position": 4
                }, 
                {
                    "matchday": 14, 
                    "position": 5
                }, 
                {
                    "matchday": 15, 
                    "position": 4
                }, 
                {
                    "matchday": 16, 
                    "position": 6
                }, 
                {
                    "matchday": 17, 
                    "position": 5
                }, 
                {
                    "matchday": 18, 
                    "position": 5
                }, 
                {
                    "matchday": 19, 
                    "position": 6
                }, 
                {
                    "matchday": 20, 
                    "position": 6
                }, 
                {
                    "matchday": 21, 
                    "position": 7
                }, 
                {
                    "matchday": 22, 
                    "position": 7
                }, 
                {
                    "matchday": 23, 
                    "position": 7
                }, 
                {
                    "matchday": 24, 
                    "position": 6
                }, 
                {
                    "matchday": 25, 
                    "position": 6
                }, 
                {
                    "matchday": 26, 
                    "position": 6
                }, 
                {
                    "matchday": 27, 
                    "position": 7
                }, 
                {
                    "matchday": 28, 
                    "position": 6
                }, 
                {
                    "matchday": 29, 
                    "position": 6
                }, 
                {
                    "matchday": 30, 
                    "position": 6
                }, 
                {
                    "matchday": 31, 
                    "position": 6
                }, 
                {
                    "matchday": 32, 
                    "position": 6
                }, 
                {
                    "matchday": 33, 
                    "position": 6
                }, 
                {
                    "matchday": 34, 
                    "position": 6
                }, 
                {
                    "matchday": 35, 
                    "position": 6
                }, 
                {
                    "matchday": 36, 
                    "position": 6
                }, 
                {
                    "matchday": 37, 
                    "position": 6
                }, 
                {
                    "matchday": 38, 
                    "position": 6
                }
            ]
        }, 
        {
            "teamName": "Caen", 
            "color": "#EA0001", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 1
                }, 
                {
                    "matchday": 2, 
                    "position": 9
                }, 
                {
                    "matchday": 3, 
                    "position": 4
                }, 
                {
                    "matchday": 4, 
                    "position": 9
                }, 
                {
                    "matchday": 5, 
                    "position": 12
                }, 
                {
                    "matchday": 6, 
                    "position": 10
                }, 
                {
                    "matchday": 7, 
                    "position": 14
                }, 
                {
                    "matchday": 8, 
                    "position": 13
                }, 
                {
                    "matchday": 9, 
                    "position": 17
                }, 
                {
                    "matchday": 10, 
                    "position": 18
                }, 
                {
                    "matchday": 11, 
                    "position": 15
                }, 
                {
                    "matchday": 12, 
                    "position": 15
                }, 
                {
                    "matchday": 13, 
                    "position": 17
                }, 
                {
                    "matchday": 14, 
                    "position": 16
                }, 
                {
                    "matchday": 15, 
                    "position": 17
                }, 
                {
                    "matchday": 16, 
                    "position": 18
                }, 
                {
                    "matchday": 17, 
                    "position": 19
                }, 
                {
                    "matchday": 18, 
                    "position": 20
                }, 
                {
                    "matchday": 19, 
                    "position": 20
                }, 
                {
                    "matchday": 20, 
                    "position": 20
                }, 
                {
                    "matchday": 21, 
                    "position": 20
                }, 
                {
                    "matchday": 22, 
                    "position": 18
                }, 
                {
                    "matchday": 23, 
                    "position": 15
                }, 
                {
                    "matchday": 24, 
                    "position": 14
                }, 
                {
                    "matchday": 25, 
                    "position": 15
                }, 
                {
                    "matchday": 26, 
                    "position": 14
                }, 
                {
                    "matchday": 27, 
                    "position": 12
                }, 
                {
                    "matchday": 28, 
                    "position": 14
                }, 
                {
                    "matchday": 29, 
                    "position": 14
                }, 
                {
                    "matchday": 30, 
                    "position": 14
                }, 
                {
                    "matchday": 31, 
                    "position": 12
                }, 
                {
                    "matchday": 32, 
                    "position": 13
                }, 
                {
                    "matchday": 33, 
                    "position": 13
                }, 
                {
                    "matchday": 34, 
                    "position": 15
                }, 
                {
                    "matchday": 35, 
                    "position": 14
                }, 
                {
                    "matchday": 36, 
                    "position": 13
                }, 
                {
                    "matchday": 37, 
                    "position": 15
                }, 
                {
                    "matchday": 38, 
                    "position": 13
                }
            ]
        }, 
        {
            "teamName": "Evian TG", 
            "color": "#CD003B", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 20
                }, 
                {
                    "matchday": 2, 
                    "position": 20
                }, 
                {
                    "matchday": 3, 
                    "position": 20
                }, 
                {
                    "matchday": 4, 
                    "position": 20
                }, 
                {
                    "matchday": 5, 
                    "position": 20
                }, 
                {
                    "matchday": 6, 
                    "position": 20
                }, 
                {
                    "matchday": 7, 
                    "position": 20
                }, 
                {
                    "matchday": 8, 
                    "position": 18
                }, 
                {
                    "matchday": 9, 
                    "position": 15
                }, 
                {
                    "matchday": 10, 
                    "position": 17
                }, 
                {
                    "matchday": 11, 
                    "position": 19
                }, 
                {
                    "matchday": 12, 
                    "position": 20
                }, 
                {
                    "matchday": 13, 
                    "position": 16
                }, 
                {
                    "matchday": 14, 
                    "position": 18
                }, 
                {
                    "matchday": 15, 
                    "position": 16
                }, 
                {
                    "matchday": 16, 
                    "position": 14
                }, 
                {
                    "matchday": 17, 
                    "position": 15
                }, 
                {
                    "matchday": 18, 
                    "position": 17
                }, 
                {
                    "matchday": 19, 
                    "position": 18
                }, 
                {
                    "matchday": 20, 
                    "position": 18
                }, 
                {
                    "matchday": 21, 
                    "position": 18
                }, 
                {
                    "matchday": 22, 
                    "position": 16
                }, 
                {
                    "matchday": 23, 
                    "position": 18
                }, 
                {
                    "matchday": 24, 
                    "position": 18
                }, 
                {
                    "matchday": 25, 
                    "position": 18
                }, 
                {
                    "matchday": 26, 
                    "position": 16
                }, 
                {
                    "matchday": 27, 
                    "position": 16
                }, 
                {
                    "matchday": 28, 
                    "position": 16
                }, 
                {
                    "matchday": 29, 
                    "position": 17
                }, 
                {
                    "matchday": 30, 
                    "position": 16
                }, 
                {
                    "matchday": 31, 
                    "position": 15
                }, 
                {
                    "matchday": 32, 
                    "position": 15
                }, 
                {
                    "matchday": 33, 
                    "position": 17
                }, 
                {
                    "matchday": 34, 
                    "position": 18
                }, 
                {
                    "matchday": 35, 
                    "position": 18
                }, 
                {
                    "matchday": 36, 
                    "position": 18
                }, 
                {
                    "matchday": 37, 
                    "position": 18
                }, 
                {
                    "matchday": 38, 
                    "position": 18
                }
            ]
        }, 
        {
            "teamName": "Guingamp", 
            "color": "#E00016", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 18
                }, 
                {
                    "matchday": 2, 
                    "position": 13
                }, 
                {
                    "matchday": 3, 
                    "position": 16
                }, 
                {
                    "matchday": 4, 
                    "position": 18
                }, 
                {
                    "matchday": 5, 
                    "position": 16
                }, 
                {
                    "matchday": 6, 
                    "position": 19
                }, 
                {
                    "matchday": 7, 
                    "position": 19
                }, 
                {
                    "matchday": 8, 
                    "position": 20
                }, 
                {
                    "matchday": 9, 
                    "position": 20
                }, 
                {
                    "matchday": 10, 
                    "position": 19
                }, 
                {
                    "matchday": 11, 
                    "position": 20
                }, 
                {
                    "matchday": 12, 
                    "position": 16
                }, 
                {
                    "matchday": 13, 
                    "position": 18
                }, 
                {
                    "matchday": 14, 
                    "position": 19
                }, 
                {
                    "matchday": 15, 
                    "position": 20
                }, 
                {
                    "matchday": 16, 
                    "position": 17
                }, 
                {
                    "matchday": 17, 
                    "position": 16
                }, 
                {
                    "matchday": 18, 
                    "position": 13
                }, 
                {
                    "matchday": 19, 
                    "position": 13
                }, 
                {
                    "matchday": 20, 
                    "position": 13
                }, 
                {
                    "matchday": 21, 
                    "position": 13
                }, 
                {
                    "matchday": 22, 
                    "position": 12
                }, 
                {
                    "matchday": 23, 
                    "position": 11
                }, 
                {
                    "matchday": 24, 
                    "position": 10
                }, 
                {
                    "matchday": 25, 
                    "position": 8
                }, 
                {
                    "matchday": 26, 
                    "position": 8
                }, 
                {
                    "matchday": 27, 
                    "position": 11
                }, 
                {
                    "matchday": 28, 
                    "position": 13
                }, 
                {
                    "matchday": 29, 
                    "position": 10
                }, 
                {
                    "matchday": 30, 
                    "position": 10
                }, 
                {
                    "matchday": 31, 
                    "position": 11
                }, 
                {
                    "matchday": 32, 
                    "position": 12
                }, 
                {
                    "matchday": 33, 
                    "position": 12
                }, 
                {
                    "matchday": 34, 
                    "position": 11
                }, 
                {
                    "matchday": 35, 
                    "position": 10
                }, 
                {
                    "matchday": 36, 
                    "position": 11
                }, 
                {
                    "matchday": 37, 
                    "position": 10
                }, 
                {
                    "matchday": 38, 
                    "position": 10
                }
            ]
        }, 
        {
            "teamName": "Lens", 
            "color": "#F5D30F", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 16
                }, 
                {
                    "matchday": 2, 
                    "position": 18
                }, 
                {
                    "matchday": 3, 
                    "position": 15
                }, 
                {
                    "matchday": 4, 
                    "position": 11
                }, 
                {
                    "matchday": 5, 
                    "position": 9
                }, 
                {
                    "matchday": 6, 
                    "position": 13
                }, 
                {
                    "matchday": 7, 
                    "position": 15
                }, 
                {
                    "matchday": 8, 
                    "position": 14
                }, 
                {
                    "matchday": 9, 
                    "position": 18
                }, 
                {
                    "matchday": 10, 
                    "position": 20
                }, 
                {
                    "matchday": 11, 
                    "position": 16
                }, 
                {
                    "matchday": 12, 
                    "position": 17
                }, 
                {
                    "matchday": 13, 
                    "position": 19
                }, 
                {
                    "matchday": 14, 
                    "position": 20
                }, 
                {
                    "matchday": 15, 
                    "position": 18
                }, 
                {
                    "matchday": 16, 
                    "position": 19
                }, 
                {
                    "matchday": 17, 
                    "position": 18
                }, 
                {
                    "matchday": 18, 
                    "position": 19
                }, 
                {
                    "matchday": 19, 
                    "position": 16
                }, 
                {
                    "matchday": 20, 
                    "position": 19
                }, 
                {
                    "matchday": 21, 
                    "position": 19
                }, 
                {
                    "matchday": 22, 
                    "position": 19
                }, 
                {
                    "matchday": 23, 
                    "position": 19
                }, 
                {
                    "matchday": 24, 
                    "position": 19
                }, 
                {
                    "matchday": 25, 
                    "position": 19
                }, 
                {
                    "matchday": 26, 
                    "position": 19
                }, 
                {
                    "matchday": 27, 
                    "position": 19
                }, 
                {
                    "matchday": 28, 
                    "position": 19
                }, 
                {
                    "matchday": 29, 
                    "position": 19
                }, 
                {
                    "matchday": 30, 
                    "position": 19
                }, 
                {
                    "matchday": 31, 
                    "position": 20
                }, 
                {
                    "matchday": 32, 
                    "position": 19
                }, 
                {
                    "matchday": 33, 
                    "position": 20
                }, 
                {
                    "matchday": 34, 
                    "position": 20
                }, 
                {
                    "matchday": 35, 
                    "position": 20
                }, 
                {
                    "matchday": 36, 
                    "position": 20
                }, 
                {
                    "matchday": 37, 
                    "position": 20
                }, 
                {
                    "matchday": 38, 
                    "position": 20
                }
            ]
        }, 
        {
            "teamName": "Lille", 
            "color": "#C91119", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 12
                }, 
                {
                    "matchday": 2, 
                    "position": 7
                }, 
                {
                    "matchday": 3, 
                    "position": 3
                }, 
                {
                    "matchday": 4, 
                    "position": 3
                }, 
                {
                    "matchday": 5, 
                    "position": 1
                }, 
                {
                    "matchday": 6, 
                    "position": 4
                }, 
                {
                    "matchday": 7, 
                    "position": 5
                }, 
                {
                    "matchday": 8, 
                    "position": 3
                }, 
                {
                    "matchday": 9, 
                    "position": 4
                }, 
                {
                    "matchday": 10, 
                    "position": 8
                }, 
                {
                    "matchday": 11, 
                    "position": 11
                }, 
                {
                    "matchday": 12, 
                    "position": 12
                }, 
                {
                    "matchday": 13, 
                    "position": 14
                }, 
                {
                    "matchday": 14, 
                    "position": 10
                }, 
                {
                    "matchday": 15, 
                    "position": 11
                }, 
                {
                    "matchday": 16, 
                    "position": 12
                }, 
                {
                    "matchday": 17, 
                    "position": 12
                }, 
                {
                    "matchday": 18, 
                    "position": 11
                }, 
                {
                    "matchday": 19, 
                    "position": 11
                }, 
                {
                    "matchday": 20, 
                    "position": 11
                }, 
                {
                    "matchday": 21, 
                    "position": 12
                }, 
                {
                    "matchday": 22, 
                    "position": 13
                }, 
                {
                    "matchday": 23, 
                    "position": 13
                }, 
                {
                    "matchday": 24, 
                    "position": 11
                }, 
                {
                    "matchday": 25, 
                    "position": 11
                }, 
                {
                    "matchday": 26, 
                    "position": 12
                }, 
                {
                    "matchday": 27, 
                    "position": 9
                }, 
                {
                    "matchday": 28, 
                    "position": 8
                }, 
                {
                    "matchday": 29, 
                    "position": 8
                }, 
                {
                    "matchday": 30, 
                    "position": 8
                }, 
                {
                    "matchday": 31, 
                    "position": 8
                }, 
                {
                    "matchday": 32, 
                    "position": 8
                }, 
                {
                    "matchday": 33, 
                    "position": 8
                }, 
                {
                    "matchday": 34, 
                    "position": 8
                }, 
                {
                    "matchday": 35, 
                    "position": 8
                }, 
                {
                    "matchday": 36, 
                    "position": 8
                }, 
                {
                    "matchday": 37, 
                    "position": 8
                }, 
                {
                    "matchday": 38, 
                    "position": 8
                }
            ]
        }, 
        {
            "teamName": "Lorient",
            "color": "#F58113",  
            "rank": [
                {
                    "matchday": 1, 
                    "position": 5
                }, 
                {
                    "matchday": 2, 
                    "position": 5
                }, 
                {
                    "matchday": 3, 
                    "position": 12
                }, 
                {
                    "matchday": 4, 
                    "position": 6
                }, 
                {
                    "matchday": 5, 
                    "position": 8
                }, 
                {
                    "matchday": 6, 
                    "position": 11
                }, 
                {
                    "matchday": 7, 
                    "position": 17
                }, 
                {
                    "matchday": 8, 
                    "position": 17
                }, 
                {
                    "matchday": 9, 
                    "position": 14
                }, 
                {
                    "matchday": 10, 
                    "position": 15
                }, 
                {
                    "matchday": 11, 
                    "position": 17
                }, 
                {
                    "matchday": 12, 
                    "position": 18
                }, 
                {
                    "matchday": 13, 
                    "position": 20
                }, 
                {
                    "matchday": 14, 
                    "position": 17
                }, 
                {
                    "matchday": 15, 
                    "position": 15
                }, 
                {
                    "matchday": 16, 
                    "position": 16
                }, 
                {
                    "matchday": 17, 
                    "position": 17
                }, 
                {
                    "matchday": 18, 
                    "position": 14
                }, 
                {
                    "matchday": 19, 
                    "position": 15
                }, 
                {
                    "matchday": 20, 
                    "position": 16
                }, 
                {
                    "matchday": 21, 
                    "position": 14
                }, 
                {
                    "matchday": 22, 
                    "position": 15
                }, 
                {
                    "matchday": 23, 
                    "position": 17
                }, 
                {
                    "matchday": 24, 
                    "position": 16
                }, 
                {
                    "matchday": 25, 
                    "position": 16
                }, 
                {
                    "matchday": 26, 
                    "position": 17
                }, 
                {
                    "matchday": 27, 
                    "position": 17
                }, 
                {
                    "matchday": 28, 
                    "position": 17
                }, 
                {
                    "matchday": 29, 
                    "position": 15
                }, 
                {
                    "matchday": 30, 
                    "position": 17
                }, 
                {
                    "matchday": 31, 
                    "position": 17
                }, 
                {
                    "matchday": 32, 
                    "position": 16
                }, 
                {
                    "matchday": 33, 
                    "position": 18
                }, 
                {
                    "matchday": 34, 
                    "position": 16
                }, 
                {
                    "matchday": 35, 
                    "position": 15
                }, 
                {
                    "matchday": 36, 
                    "position": 14
                }, 
                {
                    "matchday": 37, 
                    "position": 16
                }, 
                {
                    "matchday": 38, 
                    "position": 16
                }
            ]
        }, 
        {
            "teamName": "Lyon", 
            "color": "#013893", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 2
                }, 
                {
                    "matchday": 2, 
                    "position": 10
                }, 
                {
                    "matchday": 3, 
                    "position": 13
                }, 
                {
                    "matchday": 4, 
                    "position": 17
                }, 
                {
                    "matchday": 5, 
                    "position": 13
                }, 
                {
                    "matchday": 6, 
                    "position": 12
                }, 
                {
                    "matchday": 7, 
                    "position": 8
                }, 
                {
                    "matchday": 8, 
                    "position": 10
                }, 
                {
                    "matchday": 9, 
                    "position": 6
                }, 
                {
                    "matchday": 10, 
                    "position": 4
                }, 
                {
                    "matchday": 11, 
                    "position": 3
                }, 
                {
                    "matchday": 12, 
                    "position": 3
                }, 
                {
                    "matchday": 13, 
                    "position": 3
                }, 
                {
                    "matchday": 14, 
                    "position": 3
                }, 
                {
                    "matchday": 15, 
                    "position": 3
                }, 
                {
                    "matchday": 16, 
                    "position": 3
                }, 
                {
                    "matchday": 17, 
                    "position": 3
                }, 
                {
                    "matchday": 18, 
                    "position": 3
                }, 
                {
                    "matchday": 19, 
                    "position": 2
                }, 
                {
                    "matchday": 20, 
                    "position": 1
                }, 
                {
                    "matchday": 21, 
                    "position": 1
                }, 
                {
                    "matchday": 22, 
                    "position": 1
                }, 
                {
                    "matchday": 23, 
                    "position": 1
                }, 
                {
                    "matchday": 24, 
                    "position": 1
                }, 
                {
                    "matchday": 25, 
                    "position": 1
                }, 
                {
                    "matchday": 26, 
                    "position": 1
                }, 
                {
                    "matchday": 27, 
                    "position": 1
                }, 
                {
                    "matchday": 28, 
                    "position": 1
                }, 
                {
                    "matchday": 29, 
                    "position": 1
                }, 
                {
                    "matchday": 30, 
                    "position": 2
                }, 
                {
                    "matchday": 31, 
                    "position": 2
                }, 
                {
                    "matchday": 32, 
                    "position": 2
                }, 
                {
                    "matchday": 33, 
                    "position": 2
                }, 
                {
                    "matchday": 34, 
                    "position": 2
                }, 
                {
                    "matchday": 35, 
                    "position": 2
                }, 
                {
                    "matchday": 36, 
                    "position": 2
                }, 
                {
                    "matchday": 37, 
                    "position": 2
                }, 
                {
                    "matchday": 38, 
                    "position": 2
                }
            ]
        }, 
        {
            "teamName": "Marseille", 
            "color": "#0898D7", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 8
                }, 
                {
                    "matchday": 2, 
                    "position": 15
                }, 
                {
                    "matchday": 3, 
                    "position": 9
                }, 
                {
                    "matchday": 4, 
                    "position": 4
                }, 
                {
                    "matchday": 5, 
                    "position": 2
                }, 
                {
                    "matchday": 6, 
                    "position": 1
                }, 
                {
                    "matchday": 7, 
                    "position": 1
                }, 
                {
                    "matchday": 8, 
                    "position": 1
                }, 
                {
                    "matchday": 9, 
                    "position": 1
                }, 
                {
                    "matchday": 10, 
                    "position": 1
                }, 
                {
                    "matchday": 11, 
                    "position": 1
                }, 
                {
                    "matchday": 12, 
                    "position": 1
                }, 
                {
                    "matchday": 13, 
                    "position": 1
                }, 
                {
                    "matchday": 14, 
                    "position": 1
                }, 
                {
                    "matchday": 15, 
                    "position": 1
                }, 
                {
                    "matchday": 16, 
                    "position": 1
                }, 
                {
                    "matchday": 17, 
                    "position": 1
                }, 
                {
                    "matchday": 18, 
                    "position": 1
                }, 
                {
                    "matchday": 19, 
                    "position": 1
                }, 
                {
                    "matchday": 20, 
                    "position": 2
                }, 
                {
                    "matchday": 21, 
                    "position": 2
                }, 
                {
                    "matchday": 22, 
                    "position": 2
                }, 
                {
                    "matchday": 23, 
                    "position": 2
                }, 
                {
                    "matchday": 24, 
                    "position": 2
                }, 
                {
                    "matchday": 25, 
                    "position": 2
                }, 
                {
                    "matchday": 26, 
                    "position": 3
                }, 
                {
                    "matchday": 27, 
                    "position": 3
                }, 
                {
                    "matchday": 28, 
                    "position": 3
                }, 
                {
                    "matchday": 29, 
                    "position": 3
                }, 
                {
                    "matchday": 30, 
                    "position": 3
                }, 
                {
                    "matchday": 31, 
                    "position": 3
                }, 
                {
                    "matchday": 32, 
                    "position": 4
                }, 
                {
                    "matchday": 33, 
                    "position": 4
                }, 
                {
                    "matchday": 34, 
                    "position": 5
                }, 
                {
                    "matchday": 35, 
                    "position": 4
                }, 
                {
                    "matchday": 36, 
                    "position": 4
                }, 
                {
                    "matchday": 37, 
                    "position": 4
                }, 
                {
                    "matchday": 38, 
                    "position": 4
                }
            ]
        }, 
        {
            "teamName": "Metz", 
            "color": "#B0053A", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 12
                }, 
                {
                    "matchday": 2, 
                    "position": 14
                }, 
                {
                    "matchday": 3, 
                    "position": 18
                }, 
                {
                    "matchday": 4, 
                    "position": 14
                }, 
                {
                    "matchday": 5, 
                    "position": 17
                }, 
                {
                    "matchday": 6, 
                    "position": 9
                }, 
                {
                    "matchday": 7, 
                    "position": 6
                }, 
                {
                    "matchday": 8, 
                    "position": 5
                }, 
                {
                    "matchday": 9, 
                    "position": 9
                }, 
                {
                    "matchday": 10, 
                    "position": 7
                }, 
                {
                    "matchday": 11, 
                    "position": 10
                }, 
                {
                    "matchday": 12, 
                    "position": 8
                }, 
                {
                    "matchday": 13, 
                    "position": 9
                }, 
                {
                    "matchday": 14, 
                    "position": 13
                }, 
                {
                    "matchday": 15, 
                    "position": 13
                }, 
                {
                    "matchday": 16, 
                    "position": 13
                }, 
                {
                    "matchday": 17, 
                    "position": 14
                }, 
                {
                    "matchday": 18, 
                    "position": 16
                }, 
                {
                    "matchday": 19, 
                    "position": 17
                }, 
                {
                    "matchday": 20, 
                    "position": 17
                }, 
                {
                    "matchday": 21, 
                    "position": 17
                }, 
                {
                    "matchday": 22, 
                    "position": 20
                }, 
                {
                    "matchday": 23, 
                    "position": 20
                }, 
                {
                    "matchday": 24, 
                    "position": 20
                }, 
                {
                    "matchday": 25, 
                    "position": 20
                }, 
                {
                    "matchday": 26, 
                    "position": 20
                }, 
                {
                    "matchday": 27, 
                    "position": 20
                }, 
                {
                    "matchday": 28, 
                    "position": 20
                }, 
                {
                    "matchday": 29, 
                    "position": 20
                }, 
                {
                    "matchday": 30, 
                    "position": 20
                }, 
                {
                    "matchday": 31, 
                    "position": 19
                }, 
                {
                    "matchday": 32, 
                    "position": 20
                }, 
                {
                    "matchday": 33, 
                    "position": 19
                }, 
                {
                    "matchday": 34, 
                    "position": 19
                }, 
                {
                    "matchday": 35, 
                    "position": 19
                }, 
                {
                    "matchday": 36, 
                    "position": 19
                }, 
                {
                    "matchday": 37, 
                    "position": 19
                }, 
                {
                    "matchday": 38, 
                    "position": 19
                }
            ]
        }, 
        {
            "teamName": "Monaco", 
            "color": "#EE2722", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 15
                }, 
                {
                    "matchday": 2, 
                    "position": 19
                }, 
                {
                    "matchday": 3, 
                    "position": 17
                }, 
                {
                    "matchday": 4, 
                    "position": 15
                }, 
                {
                    "matchday": 5, 
                    "position": 19
                }, 
                {
                    "matchday": 6, 
                    "position": 16
                }, 
                {
                    "matchday": 7, 
                    "position": 11
                }, 
                {
                    "matchday": 8, 
                    "position": 12
                }, 
                {
                    "matchday": 9, 
                    "position": 13
                }, 
                {
                    "matchday": 10, 
                    "position": 10
                }, 
                {
                    "matchday": 11, 
                    "position": 8
                }, 
                {
                    "matchday": 12, 
                    "position": 7
                }, 
                {
                    "matchday": 13, 
                    "position": 7
                }, 
                {
                    "matchday": 14, 
                    "position": 8
                }, 
                {
                    "matchday": 15, 
                    "position": 10
                }, 
                {
                    "matchday": 16, 
                    "position": 8
                }, 
                {
                    "matchday": 17, 
                    "position": 7
                }, 
                {
                    "matchday": 18, 
                    "position": 6
                }, 
                {
                    "matchday": 19, 
                    "position": 5
                }, 
                {
                    "matchday": 20, 
                    "position": 5
                }, 
                {
                    "matchday": 21, 
                    "position": 5
                }, 
                {
                    "matchday": 22, 
                    "position": 5
                }, 
                {
                    "matchday": 23, 
                    "position": 5
                }, 
                {
                    "matchday": 24, 
                    "position": 5
                }, 
                {
                    "matchday": 25, 
                    "position": 5
                }, 
                {
                    "matchday": 26, 
                    "position": 4
                }, 
                {
                    "matchday": 27, 
                    "position": 4
                }, 
                {
                    "matchday": 28, 
                    "position": 4
                }, 
                {
                    "matchday": 29, 
                    "position": 4
                }, 
                {
                    "matchday": 30, 
                    "position": 4
                }, 
                {
                    "matchday": 31, 
                    "position": 4
                }, 
                {
                    "matchday": 32, 
                    "position": 3
                }, 
                {
                    "matchday": 33, 
                    "position": 3
                }, 
                {
                    "matchday": 34, 
                    "position": 3
                }, 
                {
                    "matchday": 35, 
                    "position": 3
                }, 
                {
                    "matchday": 36, 
                    "position": 3
                }, 
                {
                    "matchday": 37, 
                    "position": 3
                }, 
                {
                    "matchday": 38, 
                    "position": 3
                }
            ]
        }, 
        {
            "teamName": "Montpellier", 
            "color": "#F36F21", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 16
                }, 
                {
                    "matchday": 2, 
                    "position": 11
                }, 
                {
                    "matchday": 3, 
                    "position": 5
                }, 
                {
                    "matchday": 4, 
                    "position": 10
                }, 
                {
                    "matchday": 5, 
                    "position": 6
                }, 
                {
                    "matchday": 6, 
                    "position": 6
                }, 
                {
                    "matchday": 7, 
                    "position": 9
                }, 
                {
                    "matchday": 8, 
                    "position": 7
                }, 
                {
                    "matchday": 9, 
                    "position": 7
                }, 
                {
                    "matchday": 10, 
                    "position": 11
                }, 
                {
                    "matchday": 11, 
                    "position": 13
                }, 
                {
                    "matchday": 12, 
                    "position": 9
                }, 
                {
                    "matchday": 13, 
                    "position": 13
                }, 
                {
                    "matchday": 14, 
                    "position": 9
                }, 
                {
                    "matchday": 15, 
                    "position": 9
                }, 
                {
                    "matchday": 16, 
                    "position": 10
                }, 
                {
                    "matchday": 17, 
                    "position": 8
                }, 
                {
                    "matchday": 18, 
                    "position": 9
                }, 
                {
                    "matchday": 19, 
                    "position": 10
                }, 
                {
                    "matchday": 20, 
                    "position": 8
                }, 
                {
                    "matchday": 21, 
                    "position": 6
                }, 
                {
                    "matchday": 22, 
                    "position": 6
                }, 
                {
                    "matchday": 23, 
                    "position": 6
                }, 
                {
                    "matchday": 24, 
                    "position": 7
                }, 
                {
                    "matchday": 25, 
                    "position": 7
                }, 
                {
                    "matchday": 26, 
                    "position": 7
                }, 
                {
                    "matchday": 27, 
                    "position": 5
                }, 
                {
                    "matchday": 28, 
                    "position": 7
                }, 
                {
                    "matchday": 29, 
                    "position": 7
                }, 
                {
                    "matchday": 30, 
                    "position": 7
                }, 
                {
                    "matchday": 31, 
                    "position": 7
                }, 
                {
                    "matchday": 32, 
                    "position": 7
                }, 
                {
                    "matchday": 33, 
                    "position": 7
                }, 
                {
                    "matchday": 34, 
                    "position": 7
                }, 
                {
                    "matchday": 35, 
                    "position": 7
                }, 
                {
                    "matchday": 36, 
                    "position": 7
                }, 
                {
                    "matchday": 37, 
                    "position": 7
                }, 
                {
                    "matchday": 38, 
                    "position": 7
                }
            ]
        }, 
        {
            "teamName": "Nantes", 
            "color": "#FFD600", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 6
                }, 
                {
                    "matchday": 2, 
                    "position": 5
                }, 
                {
                    "matchday": 3, 
                    "position": 8
                }, 
                {
                    "matchday": 4, 
                    "position": 7
                }, 
                {
                    "matchday": 5, 
                    "position": 10
                }, 
                {
                    "matchday": 6, 
                    "position": 7
                }, 
                {
                    "matchday": 7, 
                    "position": 7
                }, 
                {
                    "matchday": 8, 
                    "position": 9
                }, 
                {
                    "matchday": 9, 
                    "position": 5
                }, 
                {
                    "matchday": 10, 
                    "position": 6
                }, 
                {
                    "matchday": 11, 
                    "position": 5
                }, 
                {
                    "matchday": 12, 
                    "position": 6
                }, 
                {
                    "matchday": 13, 
                    "position": 5
                }, 
                {
                    "matchday": 14, 
                    "position": 4
                }, 
                {
                    "matchday": 15, 
                    "position": 7
                }, 
                {
                    "matchday": 16, 
                    "position": 7
                }, 
                {
                    "matchday": 17, 
                    "position": 9
                }, 
                {
                    "matchday": 18, 
                    "position": 8
                }, 
                {
                    "matchday": 19, 
                    "position": 7
                }, 
                {
                    "matchday": 20, 
                    "position": 7
                }, 
                {
                    "matchday": 21, 
                    "position": 8
                }, 
                {
                    "matchday": 22, 
                    "position": 9
                }, 
                {
                    "matchday": 23, 
                    "position": 9
                }, 
                {
                    "matchday": 24, 
                    "position": 9
                }, 
                {
                    "matchday": 25, 
                    "position": 10
                }, 
                {
                    "matchday": 26, 
                    "position": 11
                }, 
                {
                    "matchday": 27, 
                    "position": 8
                }, 
                {
                    "matchday": 28, 
                    "position": 11
                }, 
                {
                    "matchday": 29, 
                    "position": 9
                }, 
                {
                    "matchday": 30, 
                    "position": 9
                }, 
                {
                    "matchday": 31, 
                    "position": 10
                }, 
                {
                    "matchday": 32, 
                    "position": 11
                }, 
                {
                    "matchday": 33, 
                    "position": 10
                }, 
                {
                    "matchday": 34, 
                    "position": 10
                }, 
                {
                    "matchday": 35, 
                    "position": 11
                }, 
                {
                    "matchday": 36, 
                    "position": 12
                }, 
                {
                    "matchday": 37, 
                    "position": 13
                }, 
                {
                    "matchday": 38, 
                    "position": 14
                }
            ]
        }, 
        {
            "teamName": "Nice", 
            "color": "#D4082D", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 4
                }, 
                {
                    "matchday": 2, 
                    "position": 4
                }, 
                {
                    "matchday": 3, 
                    "position": 9
                }, 
                {
                    "matchday": 4, 
                    "position": 16
                }, 
                {
                    "matchday": 5, 
                    "position": 11
                }, 
                {
                    "matchday": 6, 
                    "position": 17
                }, 
                {
                    "matchday": 7, 
                    "position": 12
                }, 
                {
                    "matchday": 8, 
                    "position": 7
                }, 
                {
                    "matchday": 9, 
                    "position": 11
                }, 
                {
                    "matchday": 10, 
                    "position": 12
                }, 
                {
                    "matchday": 11, 
                    "position": 7
                }, 
                {
                    "matchday": 12, 
                    "position": 10
                }, 
                {
                    "matchday": 13, 
                    "position": 12
                }, 
                {
                    "matchday": 14, 
                    "position": 12
                }, 
                {
                    "matchday": 15, 
                    "position": 12
                }, 
                {
                    "matchday": 16, 
                    "position": 15
                }, 
                {
                    "matchday": 17, 
                    "position": 11
                }, 
                {
                    "matchday": 18, 
                    "position": 12
                }, 
                {
                    "matchday": 19, 
                    "position": 12
                }, 
                {
                    "matchday": 20, 
                    "position": 12
                }, 
                {
                    "matchday": 21, 
                    "position": 10
                }, 
                {
                    "matchday": 22, 
                    "position": 8
                }, 
                {
                    "matchday": 23, 
                    "position": 8
                }, 
                {
                    "matchday": 24, 
                    "position": 8
                }, 
                {
                    "matchday": 25, 
                    "position": 9
                }, 
                {
                    "matchday": 26, 
                    "position": 9
                }, 
                {
                    "matchday": 27, 
                    "position": 13
                }, 
                {
                    "matchday": 28, 
                    "position": 15
                }, 
                {
                    "matchday": 29, 
                    "position": 16
                }, 
                {
                    "matchday": 30, 
                    "position": 12
                }, 
                {
                    "matchday": 31, 
                    "position": 13
                }, 
                {
                    "matchday": 32, 
                    "position": 10
                }, 
                {
                    "matchday": 33, 
                    "position": 11
                }, 
                {
                    "matchday": 34, 
                    "position": 12
                }, 
                {
                    "matchday": 35, 
                    "position": 13
                }, 
                {
                    "matchday": 36, 
                    "position": 15
                }, 
                {
                    "matchday": 37, 
                    "position": 12
                }, 
                {
                    "matchday": 38, 
                    "position": 11
                }
            ]
        }, 
        {
            "teamName": "Reims",
            "color": "#B41309",  
            "rank": [
                {
                    "matchday": 1, 
                    "position": 10
                }, 
                {
                    "matchday": 2, 
                    "position": 15
                }, 
                {
                    "matchday": 3, 
                    "position": 19
                }, 
                {
                    "matchday": 4, 
                    "position": 19
                }, 
                {
                    "matchday": 5, 
                    "position": 18
                }, 
                {
                    "matchday": 6, 
                    "position": 15
                }, 
                {
                    "matchday": 7, 
                    "position": 18
                }, 
                {
                    "matchday": 8, 
                    "position": 19
                }, 
                {
                    "matchday": 9, 
                    "position": 16
                }, 
                {
                    "matchday": 10, 
                    "position": 14
                }, 
                {
                    "matchday": 11, 
                    "position": 14
                }, 
                {
                    "matchday": 12, 
                    "position": 13
                }, 
                {
                    "matchday": 13, 
                    "position": 10
                }, 
                {
                    "matchday": 14, 
                    "position": 11
                }, 
                {
                    "matchday": 15, 
                    "position": 8
                }, 
                {
                    "matchday": 16, 
                    "position": 9
                }, 
                {
                    "matchday": 17, 
                    "position": 10
                }, 
                {
                    "matchday": 18, 
                    "position": 10
                }, 
                {
                    "matchday": 19, 
                    "position": 9
                }, 
                {
                    "matchday": 20, 
                    "position": 10
                }, 
                {
                    "matchday": 21, 
                    "position": 11
                }, 
                {
                    "matchday": 22, 
                    "position": 11
                }, 
                {
                    "matchday": 23, 
                    "position": 12
                }, 
                {
                    "matchday": 24, 
                    "position": 13
                }, 
                {
                    "matchday": 25, 
                    "position": 14
                }, 
                {
                    "matchday": 26, 
                    "position": 15
                }, 
                {
                    "matchday": 27, 
                    "position": 15
                }, 
                {
                    "matchday": 28, 
                    "position": 12
                }, 
                {
                    "matchday": 29, 
                    "position": 13
                }, 
                {
                    "matchday": 30, 
                    "position": 15
                }, 
                {
                    "matchday": 31, 
                    "position": 16
                }, 
                {
                    "matchday": 32, 
                    "position": 17
                }, 
                {
                    "matchday": 33, 
                    "position": 14
                }, 
                {
                    "matchday": 34, 
                    "position": 17
                }, 
                {
                    "matchday": 35, 
                    "position": 17
                }, 
                {
                    "matchday": 36, 
                    "position": 17
                }, 
                {
                    "matchday": 37, 
                    "position": 14
                }, 
                {
                    "matchday": 38, 
                    "position": 15
                }
            ]
        }, 
        {
            "teamName": "Rennes", 
            "color": "#E13328", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 18
                }, 
                {
                    "matchday": 2, 
                    "position": 8
                }, 
                {
                    "matchday": 3, 
                    "position": 7
                }, 
                {
                    "matchday": 4, 
                    "position": 5
                }, 
                {
                    "matchday": 5, 
                    "position": 7
                }, 
                {
                    "matchday": 6, 
                    "position": 8
                }, 
                {
                    "matchday": 7, 
                    "position": 13
                }, 
                {
                    "matchday": 8, 
                    "position": 15
                }, 
                {
                    "matchday": 9, 
                    "position": 12
                }, 
                {
                    "matchday": 10, 
                    "position": 13
                }, 
                {
                    "matchday": 11, 
                    "position": 9
                }, 
                {
                    "matchday": 12, 
                    "position": 11
                }, 
                {
                    "matchday": 13, 
                    "position": 7
                }, 
                {
                    "matchday": 14, 
                    "position": 7
                }, 
                {
                    "matchday": 15, 
                    "position": 6
                }, 
                {
                    "matchday": 16, 
                    "position": 5
                }, 
                {
                    "matchday": 17, 
                    "position": 6
                }, 
                {
                    "matchday": 18, 
                    "position": 7
                }, 
                {
                    "matchday": 19, 
                    "position": 8
                }, 
                {
                    "matchday": 20, 
                    "position": 9
                }, 
                {
                    "matchday": 21, 
                    "position": 9
                }, 
                {
                    "matchday": 22, 
                    "position": 10
                }, 
                {
                    "matchday": 23, 
                    "position": 10
                }, 
                {
                    "matchday": 24, 
                    "position": 12
                }, 
                {
                    "matchday": 25, 
                    "position": 12
                }, 
                {
                    "matchday": 26, 
                    "position": 13
                }, 
                {
                    "matchday": 27, 
                    "position": 10
                }, 
                {
                    "matchday": 28, 
                    "position": 9
                }, 
                {
                    "matchday": 29, 
                    "position": 11
                }, 
                {
                    "matchday": 30, 
                    "position": 11
                }, 
                {
                    "matchday": 31, 
                    "position": 9
                }, 
                {
                    "matchday": 32, 
                    "position": 9
                }, 
                {
                    "matchday": 33, 
                    "position": 9
                }, 
                {
                    "matchday": 34, 
                    "position": 9
                }, 
                {
                    "matchday": 35, 
                    "position": 9
                }, 
                {
                    "matchday": 36, 
                    "position": 9
                }, 
                {
                    "matchday": 37, 
                    "position": 9
                }, 
                {
                    "matchday": 38, 
                    "position": 9
                }
            ]
        }, 
        {
            "teamName": "ST Etienne", 
            "color": "#269045", 
            "rank": [
                {
                    "matchday": 1, 
                    "position": 2
                }, 
                {
                    "matchday": 2, 
                    "position": 1
                }, 
                {
                    "matchday": 3, 
                    "position": 2
                }, 
                {
                    "matchday": 4, 
                    "position": 8
                }, 
                {
                    "matchday": 5, 
                    "position": 4
                }, 
                {
                    "matchday": 6, 
                    "position": 3
                }, 
                {
                    "matchday": 7, 
                    "position": 3
                }, 
                {
                    "matchday": 8, 
                    "position": 6
                }, 
                {
                    "matchday": 9, 
                    "position": 10
                }, 
                {
                    "matchday": 10, 
                    "position": 5
                }, 
                {
                    "matchday": 11, 
                    "position": 4
                }, 
                {
                    "matchday": 12, 
                    "position": 5
                }, 
                {
                    "matchday": 13, 
                    "position": 6
                }, 
                {
                    "matchday": 14, 
                    "position": 6
                }, 
                {
                    "matchday": 15, 
                    "position": 5
                }, 
                {
                    "matchday": 16, 
                    "position": 4
                }, 
                {
                    "matchday": 17, 
                    "position": 4
                }, 
                {
                    "matchday": 18, 
                    "position": 4
                }, 
                {
                    "matchday": 19, 
                    "position": 4
                }, 
                {
                    "matchday": 20, 
                    "position": 3
                }, 
                {
                    "matchday": 21, 
                    "position": 4
                }, 
                {
                    "matchday": 22, 
                    "position": 4
                }, 
                {
                    "matchday": 23, 
                    "position": 4
                }, 
                {
                    "matchday": 24, 
                    "position": 4
                }, 
                {
                    "matchday": 25, 
                    "position": 4
                }, 
                {
                    "matchday": 26, 
                    "position": 5
                }, 
                {
                    "matchday": 27, 
                    "position": 6
                }, 
                {
                    "matchday": 28, 
                    "position": 5
                }, 
                {
                    "matchday": 29, 
                    "position": 5
                }, 
                {
                    "matchday": 30, 
                    "position": 5
                }, 
                {
                    "matchday": 31, 
                    "position": 5
                }, 
                {
                    "matchday": 32, 
                    "position": 5
                }, 
                {
                    "matchday": 33, 
                    "position": 5
                }, 
                {
                    "matchday": 34, 
                    "position": 4
                }, 
                {
                    "matchday": 35, 
                    "position": 5
                }, 
                {
                    "matchday": 36, 
                    "position": 5
                }, 
                {
                    "matchday": 37, 
                    "position": 5
                }, 
                {
                    "matchday": 38, 
                    "position": 5
                }
            ]
        }, 
        {
            "teamName": "Toulouse",
            "color": "#6F5B98",  
            "rank": [
                {
                    "matchday": 1, 
                    "position": 14
                }, 
                {
                    "matchday": 2, 
                    "position": 12
                }, 
                {
                    "matchday": 3, 
                    "position": 14
                }, 
                {
                    "matchday": 4, 
                    "position": 12
                }, 
                {
                    "matchday": 5, 
                    "position": 15
                }, 
                {
                    "matchday": 6, 
                    "position": 14
                }, 
                {
                    "matchday": 7, 
                    "position": 10
                }, 
                {
                    "matchday": 8, 
                    "position": 11
                }, 
                {
                    "matchday": 9, 
                    "position": 8
                }, 
                {
                    "matchday": 10, 
                    "position": 9
                }, 
                {
                    "matchday": 11, 
                    "position": 12
                }, 
                {
                    "matchday": 12, 
                    "position": 14
                }, 
                {
                    "matchday": 13, 
                    "position": 11
                }, 
                {
                    "matchday": 14, 
                    "position": 14
                }, 
                {
                    "matchday": 15, 
                    "position": 14
                }, 
                {
                    "matchday": 16, 
                    "position": 11
                }, 
                {
                    "matchday": 17, 
                    "position": 13
                }, 
                {
                    "matchday": 18, 
                    "position": 15
                }, 
                {
                    "matchday": 19, 
                    "position": 14
                }, 
                {
                    "matchday": 20, 
                    "position": 15
                }, 
                {
                    "matchday": 21, 
                    "position": 16
                }, 
                {
                    "matchday": 22, 
                    "position": 17
                }, 
                {
                    "matchday": 23, 
                    "position": 14
                }, 
                {
                    "matchday": 24, 
                    "position": 17
                }, 
                {
                    "matchday": 25, 
                    "position": 17
                }, 
                {
                    "matchday": 26, 
                    "position": 18
                }, 
                {
                    "matchday": 27, 
                    "position": 18
                }, 
                {
                    "matchday": 28, 
                    "position": 18
                }, 
                {
                    "matchday": 29, 
                    "position": 18
                }, 
                {
                    "matchday": 30, 
                    "position": 18
                }, 
                {
                    "matchday": 31, 
                    "position": 18
                }, 
                {
                    "matchday": 32, 
                    "position": 18
                }, 
                {
                    "matchday": 33, 
                    "position": 15
                }, 
                {
                    "matchday": 34, 
                    "position": 14
                }, 
                {
                    "matchday": 35, 
                    "position": 16
                }, 
                {
                    "matchday": 36, 
                    "position": 16
                }, 
                {
                    "matchday": 37, 
                    "position": 17
                }, 
                {
                    "matchday": 38, 
                    "position": 17
                }
            ]
        }
    ]
};
	

//var margin = {top: 20, right: 200, bottom: 100, left: 20};
	var margin = {top: 30, right: 150, bottom: 20, left: 50}//,
		//width = width - margin.left - margin.right,
		//height = height - margin.top - margin.bottom
		;
	
  // Chart object width  
           // Chart object width
			var width = $element.width()- margin.right - margin.left;
			// Chart object height
			var height = $element.height() - margin.bottom - margin.top;
			// Chart object id
			var id = "container_" + layout.qInfo.qId;
		    		 
			// Check to see if the chart element has already been created
			if (document.getElementById(id)) {
				// if it has been created, empty it's contents so we can redraw it
				$("#" + id).empty();
			}
			else {
				// if it hasn't been created, create it with the appropriate id and size
				$element.append($('<div />').attr({ "id": id, "class": "qv-object-AnimatedLine" }).css({ height: height, width: width }))
			}
			// Create the svg element			   
           var svg = d3.select("#" + id).append("svg")  
                .attr("width", width + margin.right + margin.left)
				.attr("height", height + margin.bottom + margin.top)
				.on("click", function (d) { club.style("opacity",1); })
			.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
				;				
 
 
var speed = 500;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.ordinal()
    .rangeRoundBands([height, 0], .1);

var xAxis = d3.svg.axis()
    .scale(x)
    .tickSize(1)
    .orient("top");

var yAxis = d3.svg.axis()
    .scale(y)
    .tickSize(-width)
    .tickPadding(10)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.matchday); })
    .y(function(d) { return y(d.position) + y.rangeBand()/2; });



var clip = svg.append("clipPath")
	.attr("id", "clip")
  .append("rect")
    .attr("width", 0)
    .attr("height", height);

  
  y.domain(d3.range(1,d3.max(data.standing, function(club) { return d3.max(club.rank, function(d) { return d.position; }); }) + 1 ).reverse());
  xAxis.tickValues(data.standing[0].rank.map(function(d) { return d.matchday; }));
  x.domain(d3.extent(data.standing[0].rank.map(function(d) { return d.matchday; })));
  /*
  svg.append("g")
	.attr("class", "y axis")
  	.call(yAxis)
	.style("font-size","10px");
*/



		
	// Create the y-axis label
	svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.style("font-size","10px")
		.append("text")
			  .attr("class", "label")
			  .attr("transform", "rotate(-90)")
			  .attr("x", 0)
			  .attr("y", -30)		  
			  .attr("dy", ".71em")
			  .style("text-anchor", "end")
			  .text("Position");
	
	// Create the x-axis label 
	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + 5 + ")")
		.call(xAxis)

		.selectAll("text")
			.attr("transform"," translate(10,-10) rotate(-65)") // To rotate the texts on x axis. Translate y position a little bit to prevent overlapping on axis line.
			.style("font-size","10px")
  	  

		.append("text")
			  .attr("class", "label")
			  //.attr("transform", "rotate(-45)")
			  .attr("x", height - 200)
			  .attr("y", width - 200)
			  .style("text-anchor", "end")
			  .text("MatchDay")

		;

  var club = svg.selectAll(".club")
      .data(data.standing)
    .enter().append("g")
      .attr("class", "club");

  var path = club.append("path")
      .attr("class", "line")
      .style("stroke", function(d) { return d.color; })
      .style("stroke-width", 2)
      .style("fill","none")
      .attr("clip-path", "url( " + document.URL + "#clip)") // fixes AngularJS problem because of: <base href="/">
      .attr("d", function(d) { return line(d.rank); });

  var circleStart = club.append("circle")
      .attr("cx", function(d) { return x(d.rank[0].matchday); })
      .attr("cy", function(d) { return y(d.rank[0].position) + y.rangeBand()/2; })
      .style("fill", function(d) { return d.color; })
      .attr("r", 4)

  var circleEnd = club.append("circle")
      .attr("cx", function(d) { return x(d.rank[0].matchday); })
      .attr("cy", function(d) { return y(d.rank[0].position) + y.rangeBand()/2; })
      .style("fill", function(d) { return d.color; })
      .attr("r", 4)

  var label = club.append("text")
      .attr("transform", function(d) { return "translate(" + x(d.rank[0].matchday) + "," + (y(d.rank[0].position) + y.rangeBand()/2) + ")"; })
      .attr("x", 8)
      .attr("dy", ".31em")
	  .style("font-size","11px")
      .on("mouseover", function (d) {
      	club.style("opacity",0.1);
      	club.filter(function(path) {return path.teamName === d.teamName; }).style("opacity",1);
      })
	  /*.on("click", function (d) {
      	club.style("opacity",0.1);
      	club.filter(function(path) {return path.teamName === d.teamName; }).style("opacity",1);
      })*/

	  
      //.on("mouseout", function (d) { club.style("opacity",1); })
      .style("cursor","pointer")
      .style("fill", function(d) { return d.color; })
      .style("font-weight", "bold")
      .text(function(d) { return "#"+ d.rank[0].position + " " + d.teamName; })
	  ;

   
  var matchday = 1;

  var transition = d3.transition()
    .duration(speed)
    .each("start", function start() {

   	  label.transition()
        .duration(speed)
        .ease('linear')
	    .attr("transform", function(d) { return "translate(" + x(d.rank[matchday].matchday) + "," + (y(d.rank[matchday].position) + y.rangeBand()/2) + ")"; })
	    .text(function(d) { return "#"+ d.rank[matchday].position + " " + d.teamName; });
  
      circleEnd.transition()
        .duration(speed)
        .ease('linear')
        .attr("cx", function(d) { return x(d.rank[matchday].matchday); })
        .attr("cy", function(d) { return y(d.rank[matchday].position) + y.rangeBand()/2; });

      clip.transition()
        .duration(speed)
        .ease('linear')
        .attr("width", x(matchday+1))
        .attr("height", height);
      
      matchday+=1;

      if (matchday !== data.standing[0].rank.length) transition = transition.transition().each("start", start);
     
    });


		  
		  
		}
	};

} );

