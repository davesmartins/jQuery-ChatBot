/*
 * Copyright 2016
 * Released under the MIT license
 * https://github.com/snowytech/st-action-panel-git
 *
 * @author: Drew D. Lenhart
 * @version: 0.0.1
 */
(function($) {
    'use strict';
  
    $.fn.launchBtn = function(options) {
      var mainBtn, panel, clicks, settings, launchPanelAnim, closePanelAnim, openPanel, boxClick;
  
      mainBtn = $(".st-button-main");
      panel = $(".st-panel");
      clicks = 0;
  
      //default settings
      settings = $.extend({
        openDuration: 600,
        closeDuration: 200,
        rotate: true
      }, options);
  
      //Open panel animation
      launchPanelAnim = function() {
        panel.animate({
          opacity: "toggle",
          height: "toggle"
        }, settings.openDuration);
        $(".mytext").focus();
      };
  
      //Close panel animation
      closePanelAnim = function() {
        panel.animate({
          opacity: "hide",
          height: "hide"
        }, settings.closeDuration);
        //resetChat();
      };
  
      //Open panel and rotate icon
      openPanel = function(e) {
        if (clicks === 0) {
          if (settings.rotate) {
            $(this).removeClass('rotateBackward').toggleClass('rotateForward');
          }
  
          launchPanelAnim();
          clicks++;
        } else {
          if (settings.rotate) {
            $(this).removeClass('rotateForward').toggleClass('rotateBackward');
          }
  
          closePanelAnim();
          clicks--;
        }
        e.preventDefault();
        return false;
      };
  
      //Allow clicking in panel
      boxClick = function(e) {
        e.stopPropagation();
      };
  
      //Main button click
      mainBtn.on('click', openPanel);
  
      //Prevent closing panel when clicking inside
      panel.click(boxClick);
  
      //Click away closes panel when clicked in document
      $(document).click(function() {
        closePanelAnim();
        if (clicks === 1) {
          mainBtn.removeClass('rotateForward').toggleClass('rotateBackward');
        }
        clicks = 0;
      });
  
  
      $("#minim_chat_window").on('click',function(){
        //$(".innerframe").toggle();
        mainBtn.click();
    });
  
    };

    $.fn.chatBot = function(options) {
            var defaults = {
                titleChat: "AutoAtendimento",
                msgType: "digite sua pergunta",
                starBoot: true,
                msgStartBot: "Olá, Em que posso lhe ajudar",
                imgButton: "", 
                openDuration: 600,
                closeDuration: 400,
                baseUrl: "",
                accessToken: "",
                sessionId: "",
                color: "#42A5F5", //"#FF0000"//#D15D36
                avatarUser: "",
                avatarBot: ""
            }
            var settings = $.extend( {}, defaults, options );

            var obj =  $(this);
            
            //https://image.flaticon.com/icons/png/128/149/149071.png
            var local = {};
            local.avatar = settings.avatarUser != ""? settings.avatarUser:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTdFQ0VEOyIgZD0iTTE4LjYxMyw0MS41NTJsLTcuOTA3LDQuMzEzYy0wLjQ2NCwwLjI1My0wLjg4MSwwLjU2NC0xLjI2OSwwLjkwM0MxNC4wNDcsNTAuNjU1LDE5Ljk5OCw1MywyNi41LDUzDQoJYzYuNDU0LDAsMTIuMzY3LTIuMzEsMTYuOTY0LTYuMTQ0Yy0wLjQyNC0wLjM1OC0wLjg4NC0wLjY4LTEuMzk0LTAuOTM0bC04LjQ2Ny00LjIzM2MtMS4wOTQtMC41NDctMS43ODUtMS42NjUtMS43ODUtMi44ODh2LTMuMzIyDQoJYzAuMjM4LTAuMjcxLDAuNTEtMC42MTksMC44MDEtMS4wM2MxLjE1NC0xLjYzLDIuMDI3LTMuNDIzLDIuNjMyLTUuMzA0YzEuMDg2LTAuMzM1LDEuODg2LTEuMzM4LDEuODg2LTIuNTN2LTMuNTQ2DQoJYzAtMC43OC0wLjM0Ny0xLjQ3Ny0wLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLDEuMDUzLTcuOTc3LTkuNzUtNy45NzdzLTkuNzUsNy45NzctOS43NSw3Ljk3N3Y1LjEyNg0KCWMtMC41NCwwLjQ4OC0wLjg4NiwxLjE4NS0wLjg4NiwxLjk2NXYzLjU0NmMwLDAuOTM0LDAuNDkxLDEuNzU2LDEuMjI2LDIuMjMxYzAuODg2LDMuODU3LDMuMjA2LDYuNjMzLDMuMjA2LDYuNjMzdjMuMjQNCglDMjAuMjk2LDM5Ljg5OSwxOS42NSw0MC45ODYsMTguNjEzLDQxLjU1MnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTYwODA7IiBkPSJNMjYuOTUzLDAuMDA0QzEyLjMyLTAuMjQ2LDAuMjU0LDExLjQxNCwwLjAwNCwyNi4wNDdDLTAuMTM4LDM0LjM0NCwzLjU2LDQxLjgwMSw5LjQ0OCw0Ni43Ng0KCQljMC4zODUtMC4zMzYsMC43OTgtMC42NDQsMS4yNTctMC44OTRsNy45MDctNC4zMTNjMS4wMzctMC41NjYsMS42ODMtMS42NTMsMS42ODMtMi44MzV2LTMuMjRjMCwwLTIuMzIxLTIuNzc2LTMuMjA2LTYuNjMzDQoJCWMtMC43MzQtMC40NzUtMS4yMjYtMS4yOTYtMS4yMjYtMi4yMzF2LTMuNTQ2YzAtMC43OCwwLjM0Ny0xLjQ3NywwLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLTEuMDUzLTcuOTc3LDkuNzUtNy45NzcNCgkJczkuNzUsNy45NzcsOS43NSw3Ljk3N3Y1LjEyNmMwLjU0LDAuNDg4LDAuODg2LDEuMTg1LDAuODg2LDEuOTY1djMuNTQ2YzAsMS4xOTItMC44LDIuMTk1LTEuODg2LDIuNTMNCgkJYy0wLjYwNSwxLjg4MS0xLjQ3OCwzLjY3NC0yLjYzMiw1LjMwNGMtMC4yOTEsMC40MTEtMC41NjMsMC43NTktMC44MDEsMS4wM1YzOC44YzAsMS4yMjMsMC42OTEsMi4zNDIsMS43ODUsMi44ODhsOC40NjcsNC4yMzMNCgkJYzAuNTA4LDAuMjU0LDAuOTY3LDAuNTc1LDEuMzksMC45MzJjNS43MS00Ljc2Miw5LjM5OS0xMS44ODIsOS41MzYtMTkuOUM1My4yNDYsMTIuMzIsNDEuNTg3LDAuMjU0LDI2Ljk1MywwLjAwNHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";

            var remote = {};
            // remote.avatar = "https://developers.viber.com/images/apps/apiai-icon.png";
            remote.avatar = settings.avatarBot != ""? settings.avatarBot:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABjAHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACvIfjZ+0bp/wAH9Y0jw/a+HdX8Y+K9VikubfRtFjUusCEB5pGYgImTgHnJ4r16vlD9uzwVqXhnw23xs8La22i+J/CuntYzxNCJYtQs5ZkHlNyCpV23Bh7g9iN6EYyqKM9mceLnVp0JSor3ke4/BX4zaH8dPBf/AAkOiRXll5N1LYXun6hF5dzZXUZG+GRQSNwyp4J4Ye4HfV8Q/Bj44eCPgHb634P0W+vfHl+93c6x4n8abYrbSoL+RVBTeWxj5FXahIHHPXHirfHr4nfEbXI7y08b+OPF/kziVIfBGmJpelIVbPltO+DIvHO4nIPU11/U5Tk3HSPS55jzanSSpzXNUtqoq9n67H6kUV+XnjC++LGt+JLvxHdaN8VNCuLhg7nQPFUW1cKB8turbQOPu4wST61q/Dv9rj4oeD9cj0uDxR/wmEyY3eEPiBYDSdWdT2guQNruSMDdu78dKPqMmvckmTHOqcf41OUF3a0+drn1t8XP2s9N+GfjS78LaZ4Q8Q+N9W022jvdXXQoUZNPhfJTezMMyMBuCDqO9eq/Dr4gaL8VPBGj+LPDt19s0bVIBPbyEYbqQysOzKwZSOxUivz7+InxEtPiL8QLHxd8NvFd14I8X+NNZ0rwh4r8Ja1Yq9xZzOGjhvFBYblRRgEZVsrnaTtr70+Dfwu074L/AAy0DwXpU01zZaTAYxcT43yuzs8jnHALO7NjtnFZVqcKdOP83U7MLXrVq027OnpytHZ0UUVxHqhRRRQAUUUUAFFFFABXxn+3h8Vodchm+ElrdpZaZ9jTWPF+qlQ32PT0cNHAgx/rpWUYHUADg7q+gPj18ddL+BPhe11C6sLnW9Y1K5FjpOi2OPOvbggnaCeFUAEs54A9SQD+d8fhzxj48+Omm6N490a202Hx54juNdvnivluTNBaReZFYsAMeWgCDPevSwdG79tNaI+ezXGcqWEpSSqT080urO++Bv7OcPxI0vS9f8W6UdJ8HW4D6B4NyREsf8NxdD/lrK+c/N685zx9Z6fpNnpNtFb2drFbQxqERI0ChVHQD2rmfHvxa8F/CWzgfxT4gsdCjkX9zDMxMjqOMpGoLMB7CvPf+G3fgl/0PMX/AILrz/4zRUdWu+azaIo06GFiqcbI9y61yHxE+EvhX4paJJpfiLSLe/t2yUZkw8TH+JGHKN7qQa89/wCG3fgl/wBDzH/4Lrz/AOM1Jbftq/BW6mSKPx1bh2OAZLK6jX8WaIAfiahU6sXdRf3GzqUpKzkj5v8AiR8Lte+G3xC8OWF5ei91uxuo7/wP4vvlDPLcQusiadenGHyV+Rj3+pUfoz8AfjJZfHX4Zad4otrdrC8ZntdS02Q5exvIztlhbvweRnBKspwM4rw746eEtM+NXwR1YaXeW94/2X+09H1K0lDqtxEC8Ukci54JGMjsTXgP7NPx78afCRtd+IWo+BZb7wB4pS3vtRj0u/jee0mjTZNfRQYG4PjLJkHgEtgV1zi8XSvb3onm0asMrxPLKSVKf4S8vU/TSis7w74h07xb4f03W9IukvtK1G3ju7W5jztlidQyMM88gjrWjXin2G+qCiiigAooooAyvEXijTPCdh9s1S6W1gLBFJBZmY9AqgEk/Sq/hjxto3jBZzpd35zwECWJ0aORM9MqwB/Gud+IlrdWHiTw14iTT5tWsNNaZbi2t03yJvUBZVXvgjn0qt4befxX8SH8R2+l3WmabBYG0M15EYpLpy4YfKedq46mvm6mPxEcd7BJW5kuWzu00m5qV7WT0tbpvdo96GCoywftm3ezd7qyadlG1r3a1367WTPDf2yPm/aA+ACnlceIGwemRawYP15P515hN/ycd8E/rrn/AKSCvUP20VNj8avgJqtx+506O41mxe6fhFnntohDGT/ecowA74NeYXUbR/tIfBRWUqc63wf+vMV+jUP9z+T/AFPxTMU/9YaXovyZ8L694ovvjP8AFDxL4y8Qaq9rZwM13PK0ZnMFuZViihijyM4MiKBkDqSa5/4m+FY/Dmpade2V39u03VLb7Va3Pl+U5Cu0bBkydrBkYcEjoQTmvQ/jn8I/FX7M/wAStXeGw83wzqDyrZXU1uJ7S5tXbcIZAwK71wuVPIKhl/hNcrYfFNX8QeG/EOr6fputf2LcQuNDubdBaTQRvlrfy9pUIwLZ4PLE8mu+Mlypw2OmUantWpvQymxrOi8dZI8/Rh/9cUug/Dqy1K10NdQ13+zNR14kabb/AGQyxkCVoQ00gYGMGRHUbVc8ZIAr6s+M37WvwJ8X/C+50TwH8JtP8N6/fIqy31zo1nb/AGIbgX8p4tzMxwQD8vBz14r5Qt/iNquglLXTns7hIJGlsbia0jmms3c5Ywuy5Q7vmHofmGCSaVKUpJ3jYvFU3GypTTPpb/gn94+1ey1Lx34Bu5ZH0z+yLjUY7eRsi3njZY32+m4SDPug969V+Cah/wBnvwwrAMraLMCCMgjD1zH7DnwC1/wbofi3x94ksptMl1DSpbKwtbpCszRth3lZTyoJRAM8nk9MZ6H4R31vpP7Nvh6/vJVt7O30SZpZpDhVHz96ypuLqzcfI8bPYyWGoKW92N+A/if4veLPgh4Q0ey8Vx/D/wAJWFl5Fu2kQpNqN8oZsyPK4IhHOAFGeOa7D/hWviduW+NPxPLHrt8QYH5eXWj+yHZy2nw7+GcNxE0blbZijjB2tJuHHuCPzr3/AEzwzqcXxYa9fTLhbH7dLIJjEdm0lsHOMY6VM3SpNrlW1zk+sZljZ3p1Wlz8mi2Xc8d8P2/ifw/4M1nw8PiN4v1EakSf7U1DUVmvrXKgfuZimU6Z47k1Z+G/irxz8II9aurjxTrfxOtDaMbTRdcniWbz15XbdbMjdjbhhjnNehwxp/whPjE7Vyt9CAcdP3hqr8UEVNes9qhc2EBOB/s1PLSqNwcF/SX+Zj9azHCUliViG7WdnrvKStr/AIfxPSvgf8a9D+O/geLxDoyy2k0crWuoaXdYFzp90hxJDKvYg9D3BB46UV80/A+8bwD+2EbO0/d6d460GV7qBejXlmylJcevlOy/jmivCxNJUajitj9WyvG/2hhIYi1m9/U+16KKSuU9U8e/aOfwJ4s8B6x4S8VW1trUssPmxaewcvHKB8kgdOY2XOc5BxkdDX55+KfhLZeHviB8Pb6Txb4osrOXUzpr6s2qs82ntLGVtzG7A7EEgAbsQcE1+kXwlu9PsrPWYr+WGHxEt9OdR89gsjfOSrc8lNuMdutfNnxr8KaB8R/Emv6FZWYvtI1KQRJDbjO5yFy0eO+/JBHtivzTHZ9jcBVwuZut+6lKzpR3s73vrrJddFaVkfd4bIsFmFPE4D2P72Mbxqy2urbaaRfq7q7J38M/H/wzBJaWfiPwZ4+sACA/iGxmsrpl7KfIzGx9yOetbfwE0jxlqXg25k+KXhjQ9N19b2RYY7GCIhrfC7WbYWXO7eBg9AM88nzPS/iB8X/gSw0DW9DHxD0m0ULFNLOLPV4Y8fKJd4KTYGAGGGbkk1vzftweEtHtjN4h8KeMvDaKdrS32kgw59pEcg1+k4bNMJjly4epGTfS9peji7NPyaPzbEZZi8C74inJLva8fVS1TXmme7/8Ixo3/QJsf/AZP8KfB4f0u1lWSHTbOKRTkPHAikfiBXiV9+2x8O9Os5Lq4tvEsUMY3O76HOiqPcsAB+dZ837ZcOrW6t4V+G/i7W5JBmKW9t47C2cY4Pmux499tdNapHDR568lBd5NJfjY5qMJYiXJQi5PtFNv8D174veLLTwL8LvFWu3sixwWWnTON54ZyhCJ9WYqoHqRX59aJ8O7Lw/ffCLR9ZvNU1q11WRRqHhee8kkhQtHuWVYQcKkchy+cg89s17P4jj8d/Ge/trzx5LY6botlJ9psvCmmuzwtMvKPdSn/WFT/CPl7+1cF8ObT4keF9R1LV5PBVhd+LtQZluNe1jVlaNYwfljhiiUlIwMcZye/YD5ejxFl9bHRVPGxhTpazu0udtNKMb7pattX15bd17mP4dzGnls74GVSrV0hZaws03Nv7LeiS33ufYng0R2vijQwAsUUd3CABgKqh1/IV22meJr9viu1u+q3Daf9ulQRNcN5W3LYGM4x0r5+s/DHx/0rQ7DxDceE/DnjfSr6LzTZ+Gbx7a7tPqLj5ZQRjhTnOewGYj438cr8r/BH4g7h126fEw/A+ZzX6LGph8VH2sJpqS0+fU/FI5fm2VyVF0XeM1J2e9ujPdIbiL/AIQrxgvmKWa9hKruGSPMPIrO+IX2/wDti0/tCO3jm+xQhRbyb1KgEA59evFeN/8ACc+N/wDoiXxC/wDBdH/8cq9YeC/jh8WsWGleEP8AhWWlTfLNr3iS4jkuo06HybWMk78dC5A+nWtOalTfO5r+kv8AIzeBzHF01h/YNaJXvppKT10/vdzS+BVo3xB/a8l1G0HmaV4F0OW3uLhRlft12ygRZ9REjE+hGKK+m/gv8GtA+BvgmDw7oKyzAyNc3uoXTb7m+uWxvnlbuzYH0AAHSivBxNb21RyWx+q5Xgll+Ehh73a39TvKKKK5T1Tyv4/+D7PUvBd5q8dnGdTtDG/2hUHmGPcAwJ7gA559K+Y7XxP/AMIXcxa59rhsRYN55uLhgsaY7sTxivufUtPg1XT7myuU8y3uI2ikX1VgQR+Rr84f2ovC03hO70LRNTh+0WA8UafHdQyj93d2pl4DDurfLke2O1fk3EmQyxWc4SrSfIqslFyXSV7p+rW3ofpOR55HB5Pi41VzulFyUX1jbVei6+pH8Sv2wPCPiKa/1q61+z1DUIYCsVnZRuofaCVRSRjknqT3rgfDI+CPjzwbeaj8UPiHb33jLVrVxGkbXH2fQy4OxYIwu1nT5cls5I9OT9gw61FbQxww6RpcUUahUjS2AVQOAAAeBT/+Eg/6hmnf+A//ANev1PKOFcNlFWpiYOU6s3rKTTfy0Vr9T8JzbxElm1Knh5wUKUNoxTS+eutuh8k6j8ZIPiBoFr4E8Y/E7wKnhBDFHqGsaZb3h1HUoI2VlTY0e2Jn2jewJ5zjI4NLx344+FHwr1Kz174VeMYZtHkuFj1XwfvneIoxwbi28xfkdSclM4I6Yxg/U+n/ABa8N6trMukWN74avNViyHsYJY3nXH3soGzx344rc/4SD/qGad/4D/8A169/F5bRx1GWGxEOaEt1p9+2/Z9Oh4eG4r/s+tGvRbjNap6/1butmfOOn/Hr4f6neR20Himx86Q7VEhaME+m5gB+tfRnwR+GumfEC51KXVJZDBZhAsEL7SxbdyT6Db2rlPi3fWGrfDHxVBqWh6VdWn9mXLsklsDjbExDA54YEZBHIIBFZ/7G/hnXfEvhTwq9tqd5pscejW73V7bvhtrRgonoSeOv90mvw3M+DsJkGMwlSnGVaM5OLhK2ul73slZbtP7z+gMg46r8VYPFwdqLpxT51fvta7d3srH0/wCAUn8MeLNW8JpdSXul2ttFdWjTHL26sSDET3HGR6Cu51LVLPR7N7q/uobO2T70szhFH4muZ0XTPD3w4Lpc6uo1DUHDyXWqXS+fcMOBycZA6AD1qH4m+HL/AFyHSLqws4dVOnXYuJNNncKlyu0jGTxkZyM8V9tQlVwOBlGC5pxbtFPm5U3otNXyx6LtZdDxaypYzGRcnaMre81bmaWr10V31fe76nV6Xq1lrVmt1p93De2zHAlgcOue4yO9W64X4Z+HNQ0m417Ub7T4tFXUrhZYtLgcOsAVcFiV43N1OPSu6r1sFWqYihGpVjyyd9NV10dnqrrWz1V7M83FUqdGtKFOXMl107bXWjs9LrR2ugooortOQKKKKACvl/8A4KHeGbK4/Z71DxQ0WNQ8P31hdRTLwdn2yFWU+ow5PsR7mvqCvJ/2rfAGpfFD9nbx34Z0eD7Vqt5p5a1t84MskbLKqD3YpgZ4yR0qoRhKcOdXSaf3O6fyMqvN7KcYPVpr71ax45XPfESx1TVPAXiKz0SQxaxcafPFaMrBSJTGwXBPQ5xz2615zon7SXhB9NgTV9dTQdXiUR3mm6mjQXFtMvDo6sOCCCKv/wDDR3w//wChz03/AL+f/Wr7M/nT6riKc/gd0+zOP1vXfhX4k+DPgLwb4A8G3Gl/GDT7uw86Q6NJb3emzRspuprm5KAOjBX43HO5eBjA+iK8n/4aO+H/AP0Omm/9/f8A61H/AA0d8P8A/oc9N/7+f/WrOnTVNWTPWzPE4nMpxnKjy8qton/kbnx4vv7P+C/jaUHaTpNxED/vxlP/AGavrX4A+C7LwH8H/COl2cPlFdLtTMzfeeTyUySf09gK+AviV8QtO+NnhuX4e+Bb/wD4SbxL4hkitIYNPjaRYU81S8srAYRFUEkk/wBa/TixtVsbK3tk+5DGsa/QDA/lXi5nGEpQbWqv8r2Pu+D6Vajh63MmlJr52PMviB8OdX1rxBqN5YWmmalFqVktoW1AkNZMMjfHwfXPHORXo+i6edK0exsmladreBITK3Vyqgbj7nFXaK+Vw+X0MLXqYinfmnv99/zd9b+Wh+n18dVxFGFGe0dvut+S/wA9Qooor0zzwooooAKKKKACiiigDJ1Dwloer3JuL7RtPvbgjBluLWORzj3IzVb/AIV/4X/6FrSP/ACL/wCJoop3YuVdg/4V/wCF/wDoWtI/8AIv/iaP+Ff+F/8AoWtI/wDACL/4miinzPuLlXYv6X4f0vQ9407TbTTw/wB77LAse767QM1oUUVJQUUUUAFFFFABRRRQB//Z"

            function formatTime(date) {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            } 

            function insertChat(who, text){
                var control = "";
                var date = formatTime(new Date());
                
                 if (who == "local"){
                    
                     control = '<li style="width:100%;">' +
                                    '<div class="msj-rta macro">' +
                                        '<div class="text text-r">' +
                                            '<p>'+text+'</p>' +
                                            '<p><small>'+date+'</small></p>' +
                                        '</div>' +
                                    '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+local.avatar+'" /></div>' +                                
                              '</li>';                   
                }else{
                    control = '<li style="width:100%">' +
                                    '<div class="msj macro">' +
                                    '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ remote.avatar +'" /></div>' +
                                        '<div class="text text-l">' +
                                            '<p>'+ text +'</p>' +
                                            '<p><small>'+date+'</small></p>' +
                                        '</div>' +
                                    '</div>' +
                                '</li>';   
                }
                $("#messages").prepend(control);
                $(".mytext").focus();
                //var objDiv = document.getElementById("messages");
                //objDiv.scrollTop = objDiv.scrollHeight; 
            }
            
            function resetChat(){
                $("#messages").empty();
            }

            function queryBot(text) {
                        $.ajax({
                            type: "POST",
                            url: settings.baseUrl ,
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            headers: {
                                "Authorization": "Bearer " + settings.accessToken
                            },
                            data: JSON.stringify({ query: text, lang: "en", sessionId: settings.sessionId }),
                            success: function(data) {
                                insertChat("remote",data.result.fulfillment.speech);
                            },
                            error: function() {
                                insertChat("remote","Desculpe não consegui conectar na minha base de conhecimento, tente mais tarde");
                            }
                        });
                }

            var btn = settings.imgButton == ""?`<i class="fa fa-bars" aria-hidden="true"></i>`:`<img class="img-circle" style="width:100%;" src="${settings.imgButton}" />`

            var novo_conteudo = `<div class="st-actionContainer right-bottom">
                                    <div class="st-panel">
                                        <div class="frame st-panel">
                                            <div class="panel panel-primary" style="z-index: 1000">
                                                <div id="chat-panel" class="panel-heading row" style="margin-right: 0px;">
                                                    <div class="col-md-8 col-xs-8">
                                                        <b>${settings.titleChat}</b>
                                                    </div>
                                                    <div class="col-md-4 col-xs-4" style="text-align: right;">
                                                        <span id="minim_chat_window" class="glyphicon glyphicon-minus icon_minim"></span>
                                                    </div>
                                                

                                            </div></div>
                                            <div class="innerframe">
                                            <ul id="messages"></ul>
                                            <div id="message-box">
                                                <div class="msj-rta macro" style="margin:auto">                        
                                                    <div class="text text-l" style="background:white">
                                                        <input class="mytext" placeholder="${settings.msgType}"/>
                                                    </div> 
                                                </div>
                                                <button class="msg_send_btn" type="button">
                                                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                                                    </button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="st-btn-container right-bottom">
                                        <div class="st-button-main">
                                          ${btn}
                                        </div>
                                    </div>
                                 </div>`

            obj.addClass('col-sm-3 col-sm-offset-4 frame');
            obj.html(novo_conteudo);
            
            $(".mytext").on("keyup", function(e){
                if (e.which == 13){
                    var text = $(this).val();
                    if (text !== ""){
                        insertChat("local", text);              
                        $(this).val('');
                        queryBot(text)
                    }
                }
            });

            $(".msg_send_btn").on("click", function(){
                var text = $(".mytext").val();
                if (text !== ""){
                    insertChat("local", text);              
                    $(".mytext").val('');
                    queryBot(text)
                }
                $(".mytext").focus();
            });

            $('st-actionContainer').launchBtn({
                openDuration: settings.openDuration,
                closeDuration: settings.closeDuration,
              });

            //custom  
            $('.st-btn-container').css("background",settings.color)  
            $('.panel-heading').css("background-color",settings.color)  
            $('.panel-heading').css("border-color",settings.color)  
            $('.msg_send_btn').css("background",settings.color+" none repeat scroll 0 0")  

            resetChat();

            if (settings.starBoot){
                insertChat("remote",settings.msgStartBot);
            }
        

    };


  }(jQuery));
  