(function(exports) {
  var b64Mp3 = 'SUQzAwAAAAASBlRJVDIAAAAPAAAB//5RAHUAbwB0AGgAAABUQUxCAAAALwAAAf/+UwB1AHIAZgBpAG4AZwAgAG8AbgAgAFMAaQBuAGUAIABXAGEAdgBlAHMAAABUWUVSAAAABgAAADIwMDEAVFJDSwAAAAYAAAAzLzExAFRQT1MAAAAFAAAAMS8xAFRQRTEAAAAhAAAB//5QAG8AbAB5AGcAbwBuACAAVwBpAG4AZABvAHcAAABUU1NFAAAANAAAAExBTUUgMzJiaXRzIHZlcnNpb24gMy45OC4yIChodHRwOi8vd3d3Lm1wM2Rldi5vcmcvKVRDT04AAAADAAAB/v9UTEVOAAAABQAAADUwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7kGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhpbmcAAAAPAAAAwQAAXzgABg4XICgxNzs9P0FERkhJS05QUlRXWVtdX2JkZmdpbG5wcnV3eXt9gIKEhYeKjI6Qk5WXmZueoKKkpaiqrK6xs7W3uby+wMLDxsjKzM/R09XX2tze4OHk5ujq7e/x8/X4+vz+AAAAZExBTUUzLjk4cgTDAAAAAAAAAAA0ICQE7E0AAfQAAF84/13AnwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7QEQAAAAAAH+AAAAIAAAP8AAAAQjwAyfhAAAhJ4okNDCM/EVgBnZ3j/+2yQGbIcISQ4kfQsmXB8Hz6yCVmICWxTxgSKm2HEDBZ0qIBCu9hAYUYXWKJKT6WgRSmoLWr8AO0OylgxWjZ1fgdMWjXTT6SJqA3b+wKzkzDkVZBaHzNIFYiC5oKlUEGvAHYKGI5JO+FYs42hYwURU8u1KCpZgWc9VLRcjWgUensuiNiHpXFH72x+LK//uQRAAAAisByWgiAAhQIUlPBEMHC/ETIaEAYiGBJSP0Mw7VVuG3/+29kaiYCPEZ6EXNBYKPF7ALA5lwTCoFLtYKFxGBTCj7AwpQqRRUq+gkE0j0NlXJUrT2uWnCv/3rUh10xxfWhqWixszA7xMR9/9bKmAvMnTnd6GHcwXDpMOjx7BdIwaMEz7RKMh7WBw014FG4BLBdgIix5jggbWNLy7HicUcGXqFGHjxiGQQGbU975VatnaWy6qlRRbd9v/rI4Cjg4/2SPSQWswQOwt7EMhMUBAIw6hwb0TcweajmhnxzViA6IxQ5zRwW+dOSL+SGVrI299mP53JmqUprw9leRSGE4YeWQ8VaL2F3rS96Rg0QpsU9LibX+hKRi27X/2xuAs6snn9raGhnqNHZn1XYu2UZS03SsSlpmQHmf7OiCzSqmXVKTXNkSvNmCO7eRX0nr61e/58jSxs5+/7/XnneEKwTbFd46Ku4PuDTpIB2rK7+Saeqcd4WSZqTFFt23/+skjJH+/9NL5E4JXSNg7YkUFBD0uGAK4dwjg6fHaa0Adx//uQRBOBAv8ryGhhHApZCGj9BCMNS5lDIaEYcyF0qaQ0MI/Ex1ZwRIYkEMQjFAgkM93D8MAY3O2gq/mttMwOs3audWvSvoHphbLP1g+2XePQ1/yox/vo3//G/X62VJLbdt/rW3Ck1lICyzR7x293+tQVMOF2oLCvWvWwgcjU6hvW9iIyNVimYwRnIzP9Qx2KRz8pe6ny//9n8e3sBpw5ZgbTr1G/2O5R9u6ZM75l+SO7+/j2c7alEFu3//odhj20XUhn13a7+6Rz3SD5ht+78YRPpDJek2gPcudy322S0KZ0lUmYyKJnDPudK2mpFb04c+Pt0/yhzY+AjRctSnIU43sDu5Ucc5wBBw9MRdG0cyyKNIGC2Xbff+2SRyG/PspoVyWTd0hxmpVo0quvoVwpM5oO2KYEK6jCDj6Emin7SQBGJaYTpb2wZEVsObrnkWq5QszY6f8GMzMpEKu2pdL1seiowpPPjXJaRPzrZVMeBL4qSSW2362NphTenTSRqV091dfQqeaHKzBgYBggokmyVGzVtJk61qpUmK60waAVVdya//uARBiAAuxBR2hhGhpcSFkNCCMFSqCJIaCAZCl1qmP0MAxMKVjQrG6dyY1LzXf5aR5TUraCmvjD1JiKO9Z7CBpqlupa6D3896Rv+eyrfz8krINdv//bJIDcd3t9rGL1Z8/nUNKruMCdCNQ8UkTQ6HQRnuYuOp9SaWlmumjbk7vSl3Y7o1Vm/mkKPmvnJF+XovhFL1ckoEmVqUzBRN/Pskx93tqNtv9+DRluxpy6Lbt9v/bJIBlGrJHPM/cVi2PtY3WFztGqDFLlBzycnwSB/seDz5+yPtmazuCwuDs//RhZ2RRSqweh75nlrCyLQPOIupjyfG8DPcF/f/X6/mvv7v+owCW2jff2xyIYazs5kqy//m8JzYRhMGglQbbCQ+pyGLPeIbNFcFAhs+lpX5IR2BWL88z3YSoN3jM2t2D5Ekb75ER8zjGRyEVIwWpE/XOw2z80Nh42phtGDEVOdVTU1U4LZtt//tJICJTf+Qz/+5BEBoADC0fIaGYeml1nmO0YIuVLHJchoIRhqXmqZDQgjG3zJWs2oxEm58xidyWMDKNCSyBxqxtdsOeVS9WYVCitL1n9ulH826JRUYyTjIZI+1auTe3lMjJic5T3hkdOmo42esr7jiU/r0afd3//3Vtfrq+8pHrGOCSa3faRtsqCK78P/6zNfKale33Myf2bH1BBfRDkgVMtradjSk8YqLzPN08EkNzSshWkzjiBJQZI8kjVvEccGN/MkEYgSslAqHpZcR5gob3Nbm9f/KP5v/173O9ZOQWXb7/6ySDQry2yzrsOWL37UVAc6EBurIAkQ+2alLr1GQt2Ir0KrgaKdi0C+OsWGWn3Z2jerA9TIIJ1Y+J6MpGRBXAQlZk3yqbal/YVv3elRu/53f2uAsqSS67f7+2SR2FXYJSH1qL8z1NnDILahT53YltjmGYSwIyozG1Lzaa3U0Kw6WcrfvPOTRK0uRbkRoTKTngyXexexbpqSGbLMFXxFnfLWEUmVD/11eLX58qf/5laVseaTgAs29/9skgPS39t9+MbI28ir7v/+5BECgAC/kxIaEYb6mGJaO0Mw8NL4PEfoIwT6YSl5DQzD01X0d0e0WfkZ0rN+u5D4dKEn5iDmZ/KR8a3h1iQyOgjzOOPmb5FTWXunWZEWV0NZZjgvQirxWfmYM9jsKtOSeerS73c5rP63X8zYozNMNy23XfyNth1Q/P5mTIsOdehiJrWO2TUmeQF6pB2WUY+FlamiQ0oqjyLlnzkIipU0IiPyY7wl1P80Jdm3Of9NoZoCf3eISba0zrlVhhw7d9/YbWKotDrnW8RbjjHKSr93otiS27//2xuBaBBwzgTAe1CSSjpmQ8ZyChlwRjxDKPAyhSeGRbtc0FlUqmRUA7ZagM+iTGLNiV8aZ67WtQ16gOHb8kQgdhU8r2i4YtKbAwwe+/SLv+TVBAx+K3/bCa+zJbLtv//tJIpqhlUWHL+1pzKbMap3B2Fci+jxhntaJXyESi/kPiL+WVLhrl7TwKCdtiTQFyOEPuUq76w8ybZ/eHl+VJa1nAhRsq14KGK401HqHGcw9ttKup95nf/UNbnb0pKSCW3b/2yOAjjP9Kz9nn/+5BEB4IC/TlH6GAaClxKuQ0MIx8MXYMfoRh2qWOnJDQSjoRd51ldW2HrMGGCjjBbaol7Vx0yDh3OhwB0A4hQxyH1RFyNSjZuiudXeSJCaI1KucEW255yULWxRrowkVfX/KfZSLzSJc573RffeSBzSH5LryNSUW3ff/WSQEbGyoYMNp8jPR7RrDPckqIHoq2f11Hr1VzRaex8g5gKkAE4Zo/CLqZl5K5U/jNZtbeW8uzaJmnS8msJZXfpHD+N1rlSpvPDKoVLscKJsUS2+xuBmIjd+2ZjI75lUrClCS1k6YEWZBaCUpRhpmvqHkosY2XsYT77IRJwyUXWwcpRcihKRcDwKjVhiOnMEZ5anmZFf7Y+eWb8TN5Nfy6h/w33I5+RmRWXmeUGihj+2aZTgot1//9tkhARXtYMFNDLnJYDvs5jQYw6oa30BaD2A0ZBsHHIjJ5DWZbp250zfzWs+GCYg4DDP25m1jMRw0LXhF1rSnlvkV/yqeMGHipxCamCTOjmma/MTNMsolu23+sjlK0Yiz4JaCxVLTZif/+5BECgAC8UrH6GEZaF7IiP0Ew18LaLEhoYRsqYeh4/QwDFRuxgzCyzpAhzBmJrOMFWhSLF8ygIEQQJDrku0OE/3YzIkpwN81W8N7sRe1LZCQpbIVL2PKo8hCRcXk7nOuNh8cmRlAXHVqrHQsxaccl933+tccGhoNQxZtg3+78RqHfUil1MG87KQuthOUmQLv0qPWr5vra8J9vyzyHKu8ziO50FL6XrpuZ5TjF10WRjYgXUcW4BQMJDAoLruatIfOQqPlRcA2b6Ek1awmnJRtv9/9ZJAbuZaQr+HZrQAA0zWIxRczV1An1Pj9sVlaqrGtCQT4IcxQWEGvUVDKBqhuiFS2CVrDEXq4O2htbmtjWEAwF8l4Na7Hm/f/9+pVGH4/rNW//ld1KiYAttu/31kcBu5yKhE+XSRsvLYUAyjiCCJwEMI670zKd6jQGoCBCwYWQM8RBAJyFrSJGdy3NkJDF1iJHBs+jLCenzGtNITuRdMXAE0FAoPU22eCLWHQsYbK45Axfh4KqSuaScEtn1/9skiaNby4F9Mg737+x4f6x63/+5BEC4BC0DvH6CYcWlSICP0EQwMLmQ8foIBsKVchZDQwj5UIdZrpe5/5Nx27HTXDbz0U+5z0utNPeEfT4XE0GNHK5sWXpTDGc3UvhG8Kpx9iwxKeyAR+91r7yam1OU/+XtZ4nV/ZUckt2+390kiYi2c6ix2iU17bzu5GM+8SeUgzu6mWXv0885tpyiOHG2gO8nbWhOTs9578ptfaH3zY5C8KYYtYRLk4dDsTyDiMgKmDh9wRSwWSrb4u0QQWjbbf6uOFCtvpsJFEKrnLmzhSMo6kSTOsYOh6LQRDBg4r5OoEBvoBYngrUdokOzVqXD5n+/8OIX/Tp17TkwURFB3fSUklE7v+1e/U1Dviztt6/T+cbZ/PT1uwXBKN/7ZJQR38+fqWZkPJVyjsVjM5GRilGU9kEo70qqKrM7mRdKMZWEN8WUknJ4IciObM46tAzx+ZF8nQc08XiuT3wPoJLjWpIW7mua+TXkJOTENepbNSy3b/b/62SxWWL1c7HJ61pef+eZAuJ29fc1yRmMnxiUiXslJX1dCQiEEkfvXV1JlOSTX/+4BEGYIC8FZIaGMF+laHaP0EAzMLZMMhoYRkqVqTY7QQDExicGe0g2f8NmBPDQ8sjIycts6X85lukP5eFF1l8hvOg9H7VxwJ9ZmqulpwTcAl22+9schIQSd/Pq+1lQzp0Y1OmsUILI1ST6j/GPeuelETOM+fztP+HTuz+iFFMjWK1QaU1iIEKEnsbrcddQRA4OiBYo8dKEooEWxyFR+GBlTiDFF27JbdvpJQ+m9PV6QtiS2EUq5zle2EyIe8cl0IqxHWWjLre53Rsi2kR2BkezRQdDOLDHCuY1E2oM6K5lyENhd7XrQl8Q8QXHJ+S3orYda2bh7RaGkWNfrQaN0rmEBJJbrv7G2zrU7T+5yftMQr917twp0KLDgAADNVNsGHGEFMIQRoZgkN7BgvUtChRUkUcbOAq2xbWsZGMW+0nD5ww8uaS0aKCQaOBcQCh5nUNSJykwS6lXIAKNt//rJKDdzPqn/06v/LPxT0hv/7kEQKgALfYchoYBkqVUKZHQwjG0swqyGhhGVpYSqj9DCPTCjEGzMSyXpuGrHkRG08nJ7xV1NS3WFP7nTNnVSnEmhea8X46+qfNT6hyqSmrZkUVDM+Zcib7WHM+cLTGJuezpcjG9Nv0xaNJbdh///9rbQe9ezoir7VWf0p9M179MVNKEjYXIY+YkEXqvjVFYuX1xvaGVh/G6yVjE4eX7zX/IxpzEPc+9FQazPFhlGSShEGm/beJm569fobju+kUqlFmu3v/uklhsY81EIivt2hZpWalXLpqyAJchyOzdRdyfXPVPz2TdobBVw0CGNI+sKc5YfCuYEX8IqjrnqMqEeqSh8FqtVN9soJqm/EJ38doy515J/syW5TgnIJbd9/rZJIcrIf+VUivaVQtAZOVxK0ojkHgmogWgFFEPuDGQRpO4UqMoTTKb2lmh9vpTtm0dtDzkafPJF7cuHmSU+Q2uZHKS0rM65ZfyGKYzakdJW9WlJuCjXb7/3WShtBd+f5zG/NeuQW+PhYlbzZSpI89pQB6ad6E740UEmzfn16Ky/BRf/7gEQXgAKQAMhoQAAKUYQJDQwjP0q47R+ghGXhVxTkNBCNPGtG5ajBa38+Ki17Df2fyxDYhjW4rR3tqxbvP+ymmOfzvfonNtA2u+/+tksxLNVn6Z0KnMxJyNXLtzGSOR2PzuhEIZAjF1JB/HkOrWt+8oo3wVh1Y0Ld4ooM/XZOccLd9+Rr6/+4WRR7a5/7mOf/2698v/hZUsUW7bf/2ySNDLPozSPQ1EhgPaO1YKIxrmk6vKc8+IfLjwFWI08tyIzdLC6aMvzaYOE27SnLquJcWERVrlapYRngCZZAZEUU06HDSiTWPoDKTKkEJ7rTAo2+//+0krQ178RMAzF8LZBkahJgaOmpoFFDOj5EcrEfkxCwRmpkplGYxJ5RsEAtHCYk2lwkEg4tdFhcOPM2vIsC/sDg40WSlVcbFUCQLJXHQA9j6kAKANvv/tZKf8H/LfY77TMrO2xE83mWZaSEtPpMOfaGHIYlpRhsOoco//twRBSAIhYiSGghGlhEozj9BANlCcybH6AEYeE+D2P0EA6FDG2n3qQzOJuK5W1+1Z/cLj0jMu/d9euf2jkAAMAPv/rJIf/8ZOk7D/hWnZnlmLFhgYKAIChxzBOXUJxxwIUQIs8AfFHKABd9NRZRjafYgasD4RJqXVC7dala+T7lLYIABrt9vtZJF/6W1E4ceHqT9RcymXs9Yr07ab9mRGRke0uqCRcXPMYI0HA+yWLGw8Xa5qW4ZECmD0XBgXLKUSQCSmtLjrl7siRegjZnzSAwBbtvpJNf5GIYMgcELhI6bsDYHGIJNlRzUcmAGRRxdXb5vFew/mT7Y2/Dz/De8322arpLlqOESaGt7xDNfGsF/Lc+/8/XmKv1//e/j2sqakBQBtv//tbKX53Kl+fGkq2Bnqs9BKrdKP/7cEQMASJ0LshoIBmoSwVpDQQifwikAyGgAAAhGIAj9AAABV2T8ocalZ8a8hmykZtBVKkS+olyyxVJ0KVBdYdImiIu4YtDGOPHXpWEipJh2xia5Yhq1OvUzrQFG23+/+1kpfiymrcTCudiYUIU5hXYSma1QGxCUoCb7MyLPu8YNoYdY1jA0RRSV3HyJJGIhMDrvtLUrEnKxKlBUgLwoQZWSJTiUsEAAG+/3/V+wAqDwFFR5EWakVMgJp1iXUGnoBYJFBZyy1YFBkeRgsh6awGd1NjxVQkD4SWKsa0TK0FUmrIv6faLNfrX71J0W0bfSSU0q/XKr/pdxrj7tlRLbeYMTp76KXbnYlZWL/YCYvSqiqAmGP9Exr//VOrOd+n/prGkSq/0UR/2tTryWvf/2+ViAAAuAH/+tkv/+1BEBA7htQBH6AAACDZgCQ0AAAECRAMeYAAAIHYAY8wAAAT5MIv/qAaR195wWY5CWbj42tAsUJs3iYImmvpEBh9X+NA964Gc/2DvuajuxyerWAAANh9/9rbf8cjoa6waBFJWUBcgfSQHJInB2OLsQ15Bo3raOWj2jE1g4+0alg7Hfup/7H6kkMKB///93/oezUR+1//0tjUt9OEA/1IdWwZxc3QLkQ0xwxBFoxBFo7Hx6R4z//8VTR/xpIP//1UjagsToHLQfNf0d4rZ3M9n//sQRAuP0OkARxgAAAg0QAjtAAABAAAB/gAAACAagGPMAAAE6WUZZLb1AAAAAbb/WQX//HWnR1aGrKotccSyoTGR1roqVJCwqjIuBMVDjtKBYNu9SEf//7vJsf5cVSOAP//508tMQU3/+xBEAY/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAANIAAAARFMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGQjj/AAAH+AAAAIAAAP8AAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZEWP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBkZ4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGSJj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZKuP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBkzY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTvj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';

  var b64toBlob = function(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
  };

  exports.testFile = b64toBlob(b64Mp3, 'audio/mpeg');
})(window);