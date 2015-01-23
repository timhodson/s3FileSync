# s3FileSync

The use case for this little tool was where I had thousands (5k +) files to upload to s3. Rather than having to sit and upload them in batches I wanted to use something that I knew would work and would only upload files that had not already been uploaded.

Other s3sync commands/utils were just not doing it for me.

## Config

Set some AWS access key's in your local shell environment.

You're advised to use IAM users and allow the following actions, `s3:GetObject`, `s3:GetObjectAcl`, `s3:ListBucket`, `s3:PutObject`, and `s3:PutObjectAcl`.
Note also that with the `s3:ListBucket` action you may have to specify the bucket and all things under the bucket as resources.

If you need it [grunt-aws-s3](https://github.com/MathieuLoutre/grunt-aws-s3) contains a whole lota extra detail on the config options used.

## Installation

You will need [Node.js](http://nodejs.org/) and NPM (which is bundled with Node.js), and then just need to run the following command.

```
npm install
```

## Running

There is a script called ./run in the project root.

```bash
shell prompt> ./run <path-to-files> <bucket-name> <prefix>
```

Where:

* **`<path-to-files>`** --  The path to the files that you want to upload
* **`<bucket-name>`** -- The bucket to upload to.
* **`<prefix>`** -- The 'folder' in the bucket to put the files in. (not strictly a folder but will be prepended to the file's key when uploaded and will act as if it were a folder. in most situations)

You may need to update Gruntfile.js with your specific region and desired concurrency. I may make that configurable in a future iteration.


