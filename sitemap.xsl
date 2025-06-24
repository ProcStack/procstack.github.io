<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" doctype-public="-//W3C//DTD HTML 4.01//EN" doctype-system="http://www.w3.org/TR/html4/strict.dtd"/>
      <xsl:template match="/">
        <html>
            <head>
                <title>ProcStack's Sitemap</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    body {
                        font-family: Roboto, sans-serif;
                        font-size: 14px;
                        background-color: #353535;
                        margin: 0;
                        padding: 20px;
                    }
                    
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        overflow: hidden;
                    }
                    
                    .header {
                        background: linear-gradient(135deg, #4e5164 0%, #494668 100%);
                        color: white;
                        padding: 40px 30px;
                        text-align: center;
                    }
                    
                    .header h1 {
                        margin: 0;
                        font-size: 32px;
                        font-weight: 300;
                    }
                    
                    .header p {
                        margin: 10px 0 0 0;
                        opacity: 0.9;
                        font-size: 16px;
                    }
                    
                    .stats {
                        background: #3d3c46;
                        padding: 20px 30px;
                        border-bottom: 1px solid #55507b;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                    }
                    
                    .stat-item {
                        text-align: center;
                        margin: 10px 0;
                    }
                    
                    .stat-number {
                        display: block;
                        font-size: 24px;
                        font-weight: 600;
                        color: #afafaf;
                    }
                    
                    .stat-label {
                        font-size: 12px;
                        color:rgb(123, 137, 150);
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    
                    .content {
                        padding: 0;
                    }
                    
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 0;
                        background-color: #4a4a4a;
                    }
                    
                    th {
                        background: #5b5d60;
                        color: white;
                        padding: 15px;
                        text-align: left;
                        font-weight: 500;
                        font-size: 13px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        text-align: center;
                    }

                    
                    td {
                        padding: 8px;
                        border-bottom: 1px solid #8a8a8a;
                        vertical-align: top;
                        text-align: center;
                        color: #8f8f8f;
                    }

                    .td-url{
                        text-align: left;
                        .padded{ margin-left: 4%; }
                    }
                    
                    .url-link {
                        color: #9dccff;
                        text-decoration: none;
                        font-weight: 500;
                        word-break: break-all;
                    }
                    
                    .url-link:hover {
                        text-decoration: underline;
                        color: #5baaff;
                    }
                    
                    .date {
                        color:rgb(147, 160, 171);
                        font-size: 13px;
                    }
                    
                    .frequency {
                        background: #e9ecef;
                        padding: 4px 8px;
                        border-radius: 12px;
                        font-size: 11px;
                        text-transform: uppercase;
                        color: #495057;
                        display: inline-block;
                    }
                    
                    .frequency.daily { background:rgb(92, 97, 93); color:rgb(57, 214, 93); }
                    .frequency.weekly { background:rgb(99, 104, 110); color:rgb(23, 123, 229); }
                    .frequency.monthly { background:rgb(86, 84, 78); color:rgb(229, 180, 32); }
                    .frequency.yearly { background:rgb(81, 75, 75); color:rgb(224, 113, 124); }
                    
                    .image-yes-indicator {
                        color: #28a745;
                        font-size: 12px;
                        font-weight: 600;
                    }
                    .image-no-indicator {
                        color:rgb(243, 120, 95);
                        font-size: 12px;
                        font-weight: 500;
                    }
                    
                    .footer {
                        padding: 30px;
                        text-align: center;
                        color: #afafaf;
                        font-size: 13px;
                        background: #3d3c46;
                        border-top: 1px solid #55507b;
                    }

                    .file-count {
                        font-weight: 600;
                        color: #343a40;
                        font-weight:700;
                        background:rgb(168, 172, 177);
                        border-radius: 4px;
                        padding: 3px 4px;
                    }

                    .table-before {
                        content: '';
                        border-radius: 15px 15px 0px 0px;
                        background: transparent;
                        border-width: 0px 2px 2px 2px;
                        border-color: #5d5d5d;
                        border-style: solid;
                        height: 12px;
                        margin-bottom: 5px;
                    }
                    .table-content{
                        border: 1px solid #5d5d5d;
                    }
                    .table-after {
                        content: '';
                        border-radius: 0px 0px 15px 15px;
                        background: transparent;
                        border-width: 2px 2px 0px 2px;
                        border-color: #5d5d5d;
                        border-style: solid;
                        height: 12px;
                        margin-top: 5px;
                    }

                    @media (max-width: 768px) {
                        body { padding: 10px; }
                        .header { padding: 30px 20px; }
                        .header h1 { font-size: 24px; }
                        .stats { padding: 15px 20px; }
                        th, td { padding: 10px; }
                        .container { border-radius: 0; }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="table-before"></div>
                    <div class="table-content">
                      <div class="header">
                          <h1>ProcStack's Sitemap</h1>
                          <p>XML Sitemap for <a href="https://procstack.github.io/" class="url-link">procstack.github.io</a></p>
                      </div>
                      
                      <div class="stats">
                          <div class="stat-item">
                              <span class="stat-number">
                                  <xsl:value-of select="count(//sitemap:url)"/>
                              </span>
                              <span class="stat-label">Total URLs</span>
                          </div>
                          <div class="stat-item">
                              <span class="stat-number">
                                  <xsl:value-of select="count(//sitemap:url[image:image])"/>
                              </span>
                              <span class="stat-label">With Images</span>
                          </div>
                          <div class="stat-item">
                              <span class="stat-number">
                                  2025-06-24
                              </span>
                              <span class="stat-label">Generated</span>
                          </div>
                      </div>
                      
                      <div class="content">
                          <table>
                              <thead>
                                  <tr>
                                      <th style="width: 50%;">URL</th>
                                      <th style="width: 15%;">Last Modified</th>
                                      <th style="width: 15%;">Change Frequency</th>
                                      <th style="width: 10%;">Priority</th>
                                      <th style="width: 10%;">Images</th>
                                  </tr>
                              </thead>                            <tbody>
                                  <xsl:for-each select="//sitemap:url">
                                      <tr>
                                          <td class="td-url">
                                              <a href="{sitemap:loc}" class="url-link padded" target="_blank">
                                                  <xsl:value-of select="sitemap:loc"/>
                                              </a>
                                          </td>
                                          <td class="date">
                                              <xsl:value-of select="sitemap:lastmod"/>
                                          </td>
                                          <td>
                                              <span class="frequency {sitemap:changefreq}">
                                                  <xsl:value-of select="sitemap:changefreq"/>
                                              </span>
                                          </td>
                                          <td>
                                              <xsl:choose>
                                                  <xsl:when test="sitemap:priority">
                                                      <xsl:value-of select="sitemap:priority"/>
                                                  </xsl:when>
                                                  <xsl:otherwise>-</xsl:otherwise>
                                              </xsl:choose>
                                          </td>
                                          <td>
                                              <xsl:choose>
                                                <xsl:when test="image:image">
                                                    <span class="image-yes-indicator">Yes</span>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                    <span class="image-no-indicator">No</span>
                                                </xsl:otherwise>
                                              </xsl:choose>
                                          </td>
                                      </tr>
                                  </xsl:for-each>
                              </tbody>
                          </table>
                      </div>
                        <div class="footer">
                          <p>Listing <span class='file-count'><xsl:value-of select="count(//sitemap:url)"/></span> URLs for <a href="https://procstack.github.io/" class="url-link">procstack.github.io</a></p>
                          <p>For more info - <a href="https://www.sitemaps.org/" target="_blank" class="url-link">sitemaps.org</a></p>
                      </div>
                    </div>
                    <div class="table-after"></div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
