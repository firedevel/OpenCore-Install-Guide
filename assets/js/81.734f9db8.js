(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{602:function(t,v,_){"use strict";_.r(v);var r=_(10),o=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"术语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[t._v("#")]),t._v(" 术语")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("术语")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("macOS")])]),t._v(" "),v("td",[t._v("苹果公司自己的基于UNIX的操作系统，用于Mac机器和“什么使Mac成为Mac”。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Windows")])]),t._v(" "),v("td",[t._v("微软的专有操作系统，在各种设备上使用和支持(如果你不想头疼，就继续使用这个操作系统)")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Linux")])]),t._v(" "),v("td",[t._v("基于Linux内核的开源类unix操作系统家族，1991年9月17日由Linus Torvalds首次发布的操作系统内核。Linux通常打包在Linux发行版中。注意，虽然macOS和Linux可能是基于unix的，但它们有很大的不同。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Distros")])]),t._v(" "),v("td",[t._v("发行版的缩写。Linux发行版是Linux的发行方式。然而，当涉及到macOS时，发行版混合了macOS安装程序和一堆非苹果公司的工具 "),v("strong",[t._v("不要使用macOS发行版")])])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Hackintosh")])]),t._v(" "),v("td",[t._v("将macOS安装到PC上的过程，请注意"),v("strong",[t._v("Hackintosh不是操作系统")]),t._v("，它也可以指被”黑客”攻击的机器，以使macOS在其上运行。例如："),v("em",[t._v("我在这台Windows机器上安装了macOS，因此我有一个Hackintosh。但是我没有安装“Hackintosh”。")])])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Bootloader")])]),t._v(" "),v("td",[t._v("加载操作系统的软件，通常由操作系统创建者制作。从技术上讲，OpenCore本身并不是一个引导加载程序(请参阅下面的引导管理器解释)。苹果的boot.efi将是Mac或Hackintosh中实际的启动加载程序。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Boot Manager")])]),t._v(" "),v("td",[t._v("管理引导加载程序的软件-我们有很多这些:Clover, systemd-boot, OpenCore, rEFInd, rEFIt…这些通常被视为为实际的引导加载程序准备系统。")])])])]),t._v(" "),v("hr"),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("术语")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("OpenCore")])]),t._v(" "),v("td",[t._v("Hackintosh现场的新热点，由 "),v("a",{attrs:{href:"https://github.com/acidanthera",target:"_blank",rel:"noopener noreferrer"}},[t._v("Acidanthera team"),v("OutboundLink")],1),t._v("在考虑安全性的情况下制作，比Clover启动更快，重量更轻。它需要更多的工作来设置，但也比Clover支持更多原生的东西(如休眠，FileVault 2，热键…)。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Clover")])]),t._v(" "),v("td",[t._v("现在被认为是OpenCore发布时遗留的引导管理器。本指南将不涉及该软件的使用。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ACPI")])]),t._v(" "),v("td",[t._v("高级配置和电源接口(Advanced Configuration and Power Interface, ACPI)提供了一个开放的标准，操作系统可以使用它来发现和配置计算机硬件组件，更多内容将在本指南的后面讨论。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("DSDT/SSDT")])]),t._v(" "),v("td",[t._v("ACPI中的表格描述了设备以及操作系统应该如何与它们进行交互，例如使计算机休眠，唤醒，切换gpu, USB端口。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(".AML")])]),t._v(" "),v("td",[t._v("编译后的ACPI文件格式，以及您的PC将执行的内容。"),v("code",[t._v(".DAT")]),t._v("是另一个具有完全相同用途的扩展。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(".DSL")])]),t._v(" "),v("td",[t._v("ACPI的源代码-这是您为计算机编辑和编译的内容。"),v("strong",[t._v("不要")]),t._v(" 将这种文件格式与"),v("code",[t._v(".asl")]),t._v("混淆。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Kexts")])]),t._v(" "),v("td",[t._v("也称为"),v("strong",[t._v("K")]),t._v("ernel "),v("strong",[t._v("Ext")]),t._v("版本，是macOS的驱动程序。它们用于执行不同的任务，如设备驱动程序，或用于不同的目的(在黑客编程中)，如为操作系统打补丁，注入信息或运行任务。kext并不是优秀Hackintosh的唯一组成部分，因为它们通常与ACPI补丁和修复一起使用。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("BIOS")])]),t._v(" "),v("td",[t._v("基本输入/输出系统是用于在启动过程(上电启动)中执行硬件初始化的固件，并为操作系统和程序提供运行时服务。BIOS固件预先安装在个人计算机的系统板上，它是第一个在上电时运行的软件(来源:Wikipedia)。这是一个70年")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("UEFI")])]),t._v(" "),v("td",[t._v("统一可扩展固件接口UEFI (Unified Extensible Firmware Interface)是定义操作系统与平台固件之间软件接口的规范。UEFI取代了最初出现在所有IBM pc兼容的个人电脑上的传统BIOS (Basic Input/Output System)固件接口，大部分UEFI固件实现都支持传统BIOS服务。UEFI可以支持远程诊断和修复计算机，即使没有安装操作系统。(资料来源:维基百科)")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("UEFI Drivers")])]),t._v(" "),v("td",[t._v("与其他操作系统一样，UEFI也有驱动程序，由Clover或OpenCore加载。它们还可以加载设备或执行其他任务，比如用HfsPlus加载苹果的HfsPlus.efi, 修补macOS的"),v("code",[t._v("boot.efi")]),t._v(" 等等. 你可能会发现它们是 "),v("code",[t._v("Clover Drivers")]),t._v(" 或 "),v("code",[t._v("OpenCore Drivers")]),t._v(", 它们都是UEFI驱动程序。 (注意:只使用针对特定引导管理器的驱动程序。 更多信息可以在 "),v("a",{attrs:{href:"https://github.com/sumingyd/OpenCore-Install-Guide/tree/master/clover-conversion",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clover转换页面"),v("OutboundLink")],1),t._v("上找到).")])])])]),t._v(" "),v("hr"),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("术语")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("EFI")])]),t._v(" "),v("td",[t._v("它可以表示两件事: "),v("br"),t._v("- Mac的固件，与UEFI相同，但只针对Mac进行了相当大的修改，所以不那么”通用”"),v("br"),t._v("- 硬盘上的分区，存储由UEFI读取的软件来加载操作系统(如Windows引导加载程序)或UEFI应用程序(如OpenCore)，它是FAT32格式的，ID类型为 "),v("code",[t._v("EF00")]),t._v(" (十六进制)。它可以被命名为ESP或SYSTEM，通常大小在100MB到400MB之间，但大小不影响任何东西。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("MBR")])]),t._v(" "),v("td",[t._v("主引导记录是分区计算机大容量存储设备(如固定磁盘或可移动驱动器)最开始时的一种特殊类型的引导扇区，用于IBM pc兼容系统和其他系统。MBR在1983年的PC DOS 2.0中首次引入。MBR保存了有关包含文件系统的逻辑分区在该介质上如何组织的信息。MBR还包含可执行代码，作为安装的操作系统的加载器，通常通过将控制权移交给加载器的第二阶段，或与每个分区的卷引导记录(volume boot record, VBR)结合使用。这段MBR代码通常被称为引导加载程序(来源:Wikipedia)。这种格式在BIOS/Legacy设置中使用。MBR格式最多支持2 TiB的大小，最多支持4个主分区。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("GPT")])]),t._v(" "),v("td",[t._v("GUID分区表GPT (GUID Partition Table)是计算机物理存储设备(如硬盘、固态硬盘等)分区表布局的标准，使用了通用唯一标识符(universally unique identifier)，也称为全球唯一标识符(GUIDs)。形成一个统一的可扩展固件接口的一部分(UEFI)标准(统一EFI论坛提议替代PC BIOS),不过也用于一些BIOS系统,由于主引导记录(MBR)分区表的局限性,使用32位的逻辑块寻址(LBA)传统的512字节的磁盘扇区(来源:维基百科)。通常，这是你想在UEFI系统上使用的磁盘格式。")])])])]),t._v(" "),v("hr"),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("术语")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("EC")])]),t._v(" "),v("td",[t._v("嵌入式控制器。主板和嵌入式外设(如热键、端口或电池)之间的通信。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("PLUG")])]),t._v(" "),v("td",[t._v("允许XCPM，苹果XNU (OS内核)电源管理，允许附加更好的整体CPU控制。仅在Haswell和更新版本上支持。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("AWAC")])]),t._v(" "),v("td",[t._v("ACPI唤醒闹钟计数器，董事会的内部时钟。与实时时钟(RTC)形成对比。macOS无法与AWAC时钟进行通信，因此必须进行补丁。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("PMC")])]),t._v(" "),v("td",[t._v("电源管理控制器，在B360, B365, H310, H370, Z390主板上，oem忘记映射此区域，因此需要SSDT-PMC来避免页面错误")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("PNLF")])]),t._v(" "),v("td",[t._v("内部背光显示，macOS使用此PNLF设备发送和接收亮度控制信息")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("XOSI/_OSI")])]),t._v(" "),v("td",[v("code",[t._v("_OSI")]),t._v(" 用于确定正在引导的是哪个操作系统，将其重命名为XOSI可以让硬件认为我们正在引导一个不同的操作系统")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("HPET")])]),t._v(" "),v("td",[t._v("高精度事件定时器，操作系统使用它来决定如何与设备(IRQ)通信。macOS对设备的设置可能非常挑剔，因此我们有时需要为HPET打补丁。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("RHUB")])]),t._v(" "),v("td",[t._v("根USB集线器，其中定义了USB端口。如果这里缺少某些定义，USB端口可能无法在macOS中工作")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("IMEI")])]),t._v(" "),v("td",[t._v("英特尔管理引擎接口，处理杂项任务。在macOS中，苹果公司依靠IMEI来实现英特尔GPU的加速。如果使用未知ID，比如使用Sandy Bridge的7系列芯片组，macOS将无法找到它用于GPU加速。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("UNC")])]),t._v(" "),v("td",[t._v("Uncore Bridge，类似于North Bridge，它处理许多与缓存相关的函数。很多时候，oem会定义这个设备，但没有功能，macOS无法处理这些情况。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("SMBus")])]),t._v(" "),v("td",[t._v("系统管理总线，用于允许设备之间轻松地进行通信。")])])])])])}),[],!1,null,null,null);v.default=o.exports}}]);