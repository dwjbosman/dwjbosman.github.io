webpackJsonp([58298523367970],{477:function(e,t){e.exports={data:{markdownRemark:{html:'<h2 id="table-of-contents"><a href="#table-of-contents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of Contents</h2>\n<ul>\n<li><a href="#introduction">Introduction</a></li>\n<li><a href="#design">Design</a></li>\n<li>\n<p><a href="#1-xilinx-zynq-block-design">1. Xilinx Zynq Block Design</a></p>\n<ul>\n<li><a href="#11-export-bit-file">1.1. Export .bit file</a></li>\n</ul>\n</li>\n<li><a href="#2-generate-dts-files">2. Generate dts files</a></li>\n<li><a href="#3-generate-fpgabin-from-fpgabit">3. Generate fpga.bin from fpga.bit</a></li>\n<li><a href="#4-yocto-linux-image">4. Yocto Linux image</a></li>\n<li><a href="#5-configure-root-file-system">5. Configure root file system</a></li>\n<li><a href="#6-format-the-sd-card">6. Format the SD card</a></li>\n<li><a href="#7-booting">7. Booting</a></li>\n<li><a href="#8-control-the-leds">8. Control the LEDs.</a></li>\n</ul>\n<h1 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h1>\n<p>In my previous article I discussed setting up a Microblaze processor which can run user applications in a bare metal environment. The advantage of using a bare metal approach is that software runs without any (undeterministic) operating system overhead. An obvious disadvantage is that you need to implement basic Operating System tasks (eg. file system access, memory management) yourself. </p>\n<p>In the earlier proposed synthesizer, I would like to develop the audio engine will run in real time. This engine will run partly on a Microblaze and will be implemented partly in custom FPGA logic. Besides audio processing the software will also need to implement systems management functions. Systems management will enable functions such as servicing an embedded website, providing firmware updates and voice patch editing. These functions can be implemented in a non Real Time environment. Furthermore the MIDI protocol can also be handled by a non Real Time environment as long as the latency is not too large. </p>\n<p>The described management functions can be implemented with ease on a Linux platform. In this article I will show how to get Linux up and running on a Xilinx Zynq Zed board. There are a number of tutorials around which describe Linux on the Zed board. This tutorial adds the following:</p>\n<ul>\n<li>Use Yocto Linux</li>\n<li>Use a device tree (dts/dtb) based upon the custom functionality implemented in the FPGA. This allows the Linux implementation to access the custom FPGA functions.</li>\n</ul>\n<p>In this tutorial the programmable logic (PL) will be configured to contain a GPIO block connected via AXI to the ARM chips in the Zynq programmable system (PS). Linux will run on the PS and will be able to access the GPIO block in the PL.</p>\n<p>The Yocto Docker file (see blow) and VHDL code can be found in the <a href="https://github.com/dwjbosman/yocto_zedboard.git">yocto_zedboard</a> repository.</p>\n<p><img src="/linux_board-d77103bed1247944b113e05cf7c7053e.gif" alt="Yocto GPIO ZED board" title="Yocto on ZED board"></p>\n<h1 id="design"><a href="#design" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design</h1>\n<p>In order to get Linux running on the Zed Board, I will be using the SD Card. On the SD card there are two partitions: boot and root. For the root filesystem I will be using Ubuntu. The boot partition needs the following files:</p>\n<ul>\n<li>boot.bin : FSBL bootloader. This bootloader reads the FPGA bit file from the SD card boot partition (fpga.bin) and starts u-boot.</li>\n<li>fpga.bin : FPGA logic fabric bitfile converted to bin format.</li>\n<li>u-boot.img : u-boot Linux bootloader.</li>\n<li>uEnv.txt : u-boot boot configuration.</li>\n<li>uImage-system-top.dtb : Linux device tree,.</li>\n<li>uImage : Yocto Linux Kernel.</li>\n</ul>\n<p>Yocto can provide these files based on input coming from Xilinx Vivado and the Xilinx SDK. In Vivado the functions defined in the Zynq PL are exported via a device tree (dts file). This device tree is then compiled into a device tree blob (dtb file) when Yocto builds the Linux image. The Linux kernel can then provide an interface to the custom FPGA logic. In more details the steps are as follows:</p>\n<ol>\n<li>Define the block design in Vivado.\n1.1. Export the bit file to the Xilinx SDK</li>\n<li>Use the SDK to export a device tree source file (dts)  </li>\n<li>Convert the fpga bit file to a bin file (fpga.bin)</li>\n<li>Configure yocto to build a Linux kernel and boot files.\n4.1. Use Docker to run Yocto\n4.2. Add the meta-Xilinx layer to add support for the Zynq processor\n4.3. Add a custom layer which provides the custom device tree (dts) files</li>\n<li>Configure the root file system, using Ubuntu</li>\n<li>Formatting the SD card and store the required boot files</li>\n</ol>\n<p>In the following sections the steps are described in more detail: </p>\n<h1 id="1-xilinx-zynq-block-design"><a href="#1-xilinx-zynq-block-design" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Xilinx Zynq Block Design</h1>\n<p>The proof of concept consists of a GPIO block connected to the Zed board LEDs and switches. The GPIO block is connected to the PS via the AXI bus. One of the LEDs is connected to a counter which causes it to blink. The blinking LED was added so that you can see that the FPGA logic was programmed during booting. The Zynq PS needs the following features: DDR memory, UART (Linux terminal), SPI (SD card) and  Ethernet. </p>\n<p>The block design can be found in the github project. Start Vivado (I use version 2018.2), select the tools menu and execute the tcl script inside the vivado_linux_zynq/ folder. This will create the project. Next generate the .bit file.</p>\n<h2 id="11-export-bit-file"><a href="#11-export-bit-file" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.1. Export .bit file</h2>\n<p>Use the \'export hardware\' function in Vivado to hand over the hardware description to the Xilinx SDK.  In the SDK click on the  hw_platform system.hdf file and not the address of the GPIO interface: 0x41200000.</p>\n<h1 id="2-generate-dts-files"><a href="#2-generate-dts-files" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Generate dts files</h1>\n<p>In order to generate a device tree (dts) file from the hardware description a separate Xilinx tool (device-tree-xlnx) is needed. This tool can be installed as an addon into the Xilinx SDK.</p>\n<ol>\n<li>clone the <a href="https://github.com/Xilinx/device-tree-xlnx">device-tree-xlnx</a> project.</li>\n<li>In the Xlinix SDK open the Xilinx menu and open \'Repositories\'. </li>\n<li>Click the \'new\' button next to the \'global repositories\' section and select the path to the checked out git repo.</li>\n<li>Create a new Board Support Package project. In the \'target hardware\' section choose the Vivado exported wrapper. In the \'board support package OS\' drop down choose \'device tree\'.</li>\n<li>The \'board support settings\' window will open. Here you can select various driver and device tree options. I\'m using kernel version 2018.3</li>\n<li>After selecting \'ok\' a number of \'dts\' and \'dtsi\' files will be generated. The system-top.dts will be compiled into a device tree blob by Yocto. Examine the system-top.dts and find that it contains a number of includes. The included dtsi files are also required. The other files can be ignored. </li>\n</ol>\n<h1 id="3-generate-fpgabin-from-fpgabit"><a href="#3-generate-fpgabin-from-fpgabit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Generate fpga.bin from fpga.bit</h1>\n<p>Use the <a href="https://github.com/topic-embedded-products/meta-topic/blob/master/recipes-bsp/fpga/fpga-bit-to-bin/fpga-bit-to-bin.py">bit to bin</a> conversion script to convert the bit file to a bin file suitable for flashing on the SD card.</p>\n<h1 id="4-yocto-linux-image"><a href="#4-yocto-linux-image" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. Yocto Linux image</h1>\n<p>Yocto is a framework of tools to create custom embedded Linux distributions. Yocto consists of the embedded Linux distribution Poky and the OpenEmbedded (OE) build system. Yocto consists of layers. Each layer can add new features or modify existing features. A custom layer will be added to inject the dts files from the previous step.</p>\n<p>In order to build a Linux image with Yocto a number of prerequisite tools need to be installed. In order to keep my PC clean, Docker is used to be able to install all dependencies without affecting my normal day-to-day work. The Docker file can be found in the repository.</p>\n<ol>\n<li>Clone the repository</li>\n<li>Copy the required dts and dtsi to the <pre>meta-dts/recipes-kernel/linux/linux-xlnx/zedboard-zynq7/</pre> folder.</li>\n<li>If needed update the <pre>meta-dts/recipes-kernel/linux/linux-xlnx_%.bbappend</pre> file to include the copied dts/dtsi files.</li>\n<li>cd in to the \'yocto\' sub directory.</li>\n<li>Create the Docker image by running "make image". After this step is completed (which will take quite a long time!) the Docker image will contain the Linux image files for the Zed Board</li>\n<li>Run the "run.sh" script to create and log in to a Docker container. The script mounts your home dir inside the container so that you can copy files to and from the container.</li>\n<li>Copy the files inside /yocto/poky/build/tmp/deploy/images/zedboard-zynq7 to a folder in your home dir.</li>\n</ol>\n<h1 id="5-configure-root-file-system"><a href="#5-configure-root-file-system" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. Configure root file system</h1>\n<p>I followed this blog on setting up an <a href="https://embeddedgreg.com/2017/06/17/creating-a-xenial-rootfs-for-zy">Ubuntu Xenial rootfs</a>. </p>\n<ul>\n<li>\n<p>Don\'t follow the complete article. Skip the part on u-boot. U-boot is already provided by Yocto.</p>\n</li>\n<li>\n<p>Do not forget to install sudo. </p>\n</li>\n</ul>\n<h1 id="6-format-the-sd-card"><a href="#6-format-the-sd-card" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6. Format the SD card</h1>\n<p>Use fdisk to setup the partitions on the SD card. Setup the following partition table:</p>\n<pre>\nDevice         Boot Start      End  Sectors  Size Id Type\n/dev/mmcblk0p1 *        8    42605    42598 20,8M  c W95 FAT32 (LBA)\n/dev/mmcblk0p2      42608 13833091 13790484  6,6G 83 Linux\n</pre>\n<p>After partioning the SD card exit fdisk and mount the partitions. Use rsync to copy the rootfs to the second partition.</p>\n<pre>\nsudo rsync -aAXv <path_to\\_your\\_rootfs>/* /path_to_mount_point_second_partition/\n</pre>\n<p>Copy the following files from the yocto deploy/images directory (Yocto Linux image step 4) to the SD card boot partition:</p>\n<pre>\nboot.bin  \nu-boot.img  \nuImage  \nuImage-system-top.dtb\n</pre>\n<p>Copy the converted fpga bit stream (step Generate fpga.bin from fpga.bit) to the boot partition:</p>\n<pre>\nfpga.bin  \n</pre>\n<p>Finally modify the uEnv.txt file generated by Yocto (so that it uses the new dtb file), and copy it to the boot partition:</p>\n<div style=\'overflow:auto;width:100%\'>\n<pre>\nmachine_name=zedboard-zynq7\nkernel_image=uImage\nkernel_load_address=0x2080000\ndevicetree_image=uImage-system-top.dtb\ndevicetree_load_address=0x2000000\nbootargs=console=ttyPS0,115200 root=/dev/mmcblk0p2 rw earlyprintk rootfstype=ext4 rootwait devtmpfs.mount=1\nloadkernel=fatload mmc 0 ${kernel_load_address} ${kernel_image}\nloaddtb=fatload mmc 0 ${devicetree_load_address} ${devicetree_image}\nbootkernel=run loadkernel && run loaddtb && bootm ${kernel_load_address} - ${devicetree_load_address}\nuenvcmd=run bootkernel\n</pre>\n</div>\n<h1 id="7-booting"><a href="#7-booting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>7. Booting</h1>\n<p>After copying the files to the SD card, unmount the paritions. Plug the SD card in the ZED board, connect the UART and power up the board. Use a terminal program (eg. GTK Term) to connect. I found that the ZED board needs some time to setup the serial connection. When the serial connection is finally available part of the boot process is already underway. Press the PS-RST button to restart the ZED board; this will keep the serial connection active. You should now see be able to follow the boot process through info provided by the FSBL boot loader, U-boot and finally Linux. Once the FSBL bootloader setsup the FPGA one of the LEDS should begin to blink.</p>\n<p>Running \'dmesg\' showed that my usb-serial adapter was configured as \'/dev/ttyACMO\'</p>\n<pre>gtkterm --port /dev/ttyACM0 --speed 115200</pre>\n<p>When the boot process finishes you should be able to login using the \'ubuntu\' user and the password you set up earlier. Become superuser by running </p>\n<pre>sudo -i -u root</pre>\n<h1 id="8-control-the-leds"><a href="#8-control-the-leds" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>8. Control the LEDs.</h1>\n<p>As noted from the system hdf file (step 1.1) the address of the GPIO interface is 0x41200000. Go to the \'/sys/class/gpio\' folder. Linux provides a GPIO interface through the sysfs system. </p>\n<pre>\nubuntu@localhost:/sys/class/gpio$ ls\nexport  gpiochip1008  gpiochip1016  gpiochip890  unexport\n</pre>\n<p>There are several gpio interfaces. For example the programable system (PS) also has GPIO. The FPGA GPIO will provide two interfaces. We can inspect the interfaces:</p>\n<pre>\nubuntu@localhost:/sys/class/gpio$ cat gpiochip1008/label\n/amba_pl/gpio@41200000\nubuntu@localhost:/sys/class/gpio$ cat gpiochip1016/label\n/amba_pl/gpio@41200000\n</pre>\n<p>The address corresponds to the one specify by the hdf file. To use the interfaces:</p>\n<pre>\n#enable the first two bits of the inputs \necho 1008 > export\necho 1009 > export\n#enable the first two bits of the outputs\necho 1016 > export\necho 1017 > export\n</pre>\n<p>This will create a number for new IO files:</p>\n<div style=\'overflow:auto;width:100%\'>\n<pre>\nroot@localhost:/sys/class/gpio# ls -al\ntotal 0\ndrwxr-xr-x  2 root root    0 Feb 11 17:05 .\ndrwxr-xr-x 45 root root    0 Feb 11 16:45 ..\n--w-------  1 root root 4096 Feb 11 17:08 export\nlrwxrwxrwx  1 root root    0 Feb 11 16:53 gpio1008 -> ../../devices/soc0/amba_pl/41200000.gpio/gpiochip1/gpio/gpio1008\nlrwxrwxrwx  1 root root    0 Feb 11 17:02 gpio1009 -> ../../devices/soc0/amba_pl/41200000.gpio/gpiochip1/gpio/gpio1009\nlrwxrwxrwx  1 root root    0 Feb 11 16:53 gpio1016 -> ../../devices/soc0/amba_pl/41200000.gpio/gpiochip0/gpio/gpio1016\nlrwxrwxrwx  1 root root    0 Feb 11 17:02 gpio1017 -> ../../devices/soc0/amba_pl/41200000.gpio/gpiochip0/gpio/gpio1017\nlrwxrwxrwx  1 root root    0 Feb 11 16:45 gpiochip1008 -> ../../devices/soc0/amba_pl/41200000.gpio/gpio/gpiochip1008\nlrwxrwxrwx  1 root root    0 Feb 11 16:45 gpiochip1016 -> ../../devices/soc0/amba_pl/41200000.gpio/gpio/gpiochip1016\nlrwxrwxrwx  1 root root    0 Feb 11 16:45 gpiochip890 -> ../../devices/soc0/amba/e000a000.gpio/gpio/gpiochip890\n--w-------  1 root root 4096 Feb 11 17:05 unexport\n</pre>\n</div>\n<p>Set the direction of the outputs to \'out\' (\'in\' is the default)</p>\n<pre>\necho out > gpio1016/direction\necho out > gpio1017/direction\n</pre>\n<p>Turn on the LEDs:</p>\n<pre>\necho 1 > gpio1016/value\necho 1 > gpio1017/value\n</pre>\n<p>Read out 2 switches:</p>\n<pre>\ncat gpio1008/value\ncat gpio1009/value\n</pre>',timeToRead:10,excerpt:"Table of Contents Introduction Design 1. Xilinx Zynq Block Design 1.1. Export .bit file 2. Generate dts files 3. Generate fpga.bin from fpga…",frontmatter:{title:"Yocto linux on the Xilinx Zynq Zed board",cover:"/logos/linux.png",date:"2019-01-12 09:00",category:"FPGA",tags:["Zynq Yocto FPGA Linux Xilinx"]},fields:{nextTitle:"Yocto linux on the Xilinx Zynq Zed board",nextSlug:"/yocto-linux-on-the-xilinx-zynq-zed-board",prevTitle:"Yocto linux on the Xilinx Zynq Zed board",prevSlug:"/yocto-linux-on-the-xilinx-zynq-zed-board",slug:"/yocto-linux-on-the-xilinx-zynq-zed-board"}}},pathContext:{slug:"/yocto-linux-on-the-xilinx-zynq-zed-board"}}}});
//# sourceMappingURL=path---yocto-linux-on-the-xilinx-zynq-zed-board-837eb6adb91ef6944ad6.js.map